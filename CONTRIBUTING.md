# Contributing to bson-transpilers

## Setting up your environment
The `bson-transpilers` package uses
[ANTLR4](https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md)
to create a parse tree. As `ANTLR` is written in Java, you will need to set up a
few tools before being able to compile this locally. 

Make sure you have Java installed:
```shell
$ brew cask install java
```

Download `ANTLR4`:
```shell
$ cd /usr/local/lib && curl -O http://www.antlr.org/download/antlr-4.7.1-complete.jar
```

You will then need to add it to your `$CLASSPATH`:
```shell
$ export CLASSPATH=".:/usr/local/lib/antlr-4.7.1-complete.jar:$CLASSPATH"
```

Alias `antlr4` and `grun`:
```shell
$ alias antlr4='java -Xmx500M -cp "/usr/local/lib/antlr-4.7.1-complete.jar:$CLASSPATH" org.antlr.v4.Tool' && alias grun='java org.antlr.v4.gui.TestRig'
```

Then compile and run tests locally with:
```shell
$ npm run compile && npm run test
```

You can provide a few environmental variables to help you test your specific
output and input languages. If none are provided, everything will run.
- __INPUT=:__ input language you want to test
- __OUTPUT=:__ output language you want to test. Also called "target" language.
- __MODE=:__ works with either success or error test modes

```shell
OUTPUT=csharp INPUT=shell MODE=success npm run test 
```

# How it works
## Compilation Stages
Similar to how many transpilers work, this package parses the input 
string into a tree and then generates code from the tree using the [Visitor 
pattern](https://en.wikipedia.org/wiki/Visitor_pattern).

### Step 1: Parsing
Parsing and tree generation is handled by ANTLR4. 
The grammar files are located in the `grammars` folder, and the javascript 
parser/lexer/etc. generated from the grammar are located in `lib/antlr`. To make
changes to the grammar, you have to modify the `.g4` file in `grammars`, then 
run `npm run compile`. You should never directly modify files in `lib`.

Each grammar will generate a tree that is unique to the grammar. This means that
for equivalent input code, the tree generated from ECMAScript.g4 is not going to be
exactly the same as the tree generated by Python3.g4. As a result, we need different
visitor classes for each tree.

ANTLR generates a "shell" visitor class for each tree in 
`lib/antlr/<grammar name>Visitor.js`. It contains an empty method
for each node in the parse tree.


### Step 2: Visitor
<img alt="visiting-tree" width="60%" align="right" src="/img-docs/visiting-tree.png"/>

Because the project is designed to handle multiple input languages and multiple 
output languages, the tree visitation stage is split into parts. The first part
is handled in the visitor class defined in `codegeneration/<input language>/Visitor.js`.
It is a subclass of the "shell" visitor class generated in `lib/antlr`. 

This visitor class <b>is specific to the input language</b> and can only visit 
a tree generated by that grammar. The visitor visits each node and use a 
[string template](#templates) defined in either the [symbol table](#symbols) 
or the [type table](#types) to generate code in the ouput language. 
For expressions that are too complex for a string template, the visitor will call an 
`emit` method defined in the [Generator](#step-3:-generator).

If the node requires special treatment for all output languages, the visitor will 
define a `process<type>` method that will do some pre-processing before calling 
the appropriate string template or `emit` method. An example is `processDate` in 
the JS visitor, which constructs a date object from the input and passes it to the 
`emitDate` methods defined in all the Generators.


### Step 3: Generator
The other half of the tree visitation stage. Each ouput language will 
have a Generator class defined in `codegeneration/<ouput language>/Generator.js`. 
The Generator class generates code, so it is <b> specific to the ouput language.
</b> The Generator class is a subclass of the input language's visitor class. 
So for example, translating between JS and Python, the order of inheritance will be:
   1. `lib/antlr/ECMAScriptVisitor.js` ["shell" superclass]
   2. `codegeneration/javascript/Visitor.js` [specific to input language]
   3. `codegeneration/python/Generator.js` [specific to ouput language]

For nodes that cannot be translated using 
templates, the Generator class will define a method called `emit<type>` which
takes in a tree node, some optional metadata, and returns the transformed string.
Modifying output in the Generator should only be done if it's not possible to
modify it using a string template.

## Handling Identifiers

When the visitor in [step #1](#step-1:-parsing) reaches a function call, variable, attribute access, or other "identifier" 
expression it needs a way of knowing what that symbol evaluates to in order to know if it is valid.

### Symbols
Each input language has it's own set of symbols that are part of the 
language. The majority of symbols supported in the input languages are BSON types 
(i.e. `Int32`, `ObjectId`, etc) but there are a few native types like `RegExp` and 
`Date` that are not BSON-specific. In order for the transpiler to know if a symbol 
is undefined, we store symbol information in a 
[Symbol Table](https://en.wikipedia.org/wiki/Symbol_table).

#### Symbol Metadata
The visitor uses the symbol table to determine if a symbol is undefined, but the 
symbol table also stores some metadata so the visitor can do type and other validity checks. The symbols
are defined in [YAML](https://en.wikipedia.org/wiki/YAML) in the 
`symbols/<input language>/symbols.yaml` file. A symbol definition looks like:


```yml
    Decimal128:
        id: "Decimal128"
        callable: *constructor
        args:
            - [ *ObjectType ]
        type: *Decimal128Type
        attr:
            fromString:
                id: "fromString"
                callable: *func
                args:
                    - [ *StringType ]
                type: *Decimal128Type
                attr: {}
                template: *Decimal128SymbolFromStringTemplate
                argsTemplate: *Decimal128SymbolFromStringArgsTemplate
        template: *Decimal128SymbolTemplate
        argsTemplate: *Decimal128SymbolArgsTemplate
```
<br>

| Field     | Data         |
| ----------|:-------------|
| id        | The name of the attribute. Mostly used for error reporting and the `emit` or `process` method names. |
| callable  | Used for determining if the symbol can be part of a function call. There are three types of symbols: <br><br>`*func`: a function call. If the symbol is found as the "left-hand-side" of a function call, it is valid. <br><br>`*constructor`: also a function call, but may require a `new` keyword if the output language requires it. <br><br>`*var`: a variable. Indicates to the transpiler that the symbol cannot be invoked, i.e. `<symbol>()`  is invalid.|
| args      | Used for type checking. If the symbol is callable, i.e. a `*func` or `*constructor`, then the expected arguments are defined here as an array. So for example, if the function takes in a string as the first arg, and an optional second arg that can be a object or array, args will look like <br>`[ [*StringType], [*ObjectType, *ArrayType, null] ]`.|
| type      | The type that the symbol evaluates to. If it is a variable, it will be the type of the variable. If it is a function, it will be the return type. See the [Types](#types) section.|
| attr      | Used for determining if attribute access is valid. This field is also a symbol table, but a namespace-prefixed one. So for the example above, `Decimal128.fromString` is a valid attribute, so we need to define the symbol `fromString` in the same way we defined the `Decimal128` symbol.|
| template  | Used for code generation. See the [Templates](#templates) section.|
| argsTemplate | Used for code generation. See the [Templates](#templates) section.|


### Types
Each input language also has a set of types that are part of the language. 
The set of types that are universal for all languages (i.e. "primitives", 
"literals", like `string`, `integer`, etc) are defined in the file 
`symbols/basic_types.yaml`.

Types that are specific to the input language are defined in `symbols/<input 
language>/types.yaml`. These include BSON types, i.e. classes like `ObjectId`, and
language-specific types like `RegExp` and `Date`. The types are defined in the same
pattern as the symbols and contain the same metadata as the symbols.

NOTE: It is important not to mix up symbols and types, especially since they can share 
the same identifier.
The **symbol** `ObjectId` supports attributes like `ObjectId.fromString(...)` 
and is callable, so `ObjectId()` is valid. The **type** `ObjectId` supports 
attributes like `ObjectId().toString()` and is not callable, so `ObjectId()()` 
is not valid.

## Templates
The symbol and type tables include an additional piece of metadata, called a `template`.
These are functions that accept strings and return strings, and are responsible for 
doing the string transformations from one language syntax to another language's syntax.
They are defined in `symbols/<ouput language>/templates.yaml`. This is where 
the majority of code generation happens, so the templates are **specific to the output language**.

Templates can be split into `template` and `argTemplate`. For symbols that are function 
calls, the `argsTemplate` is a function that gets applied to the arguments in case they 
need rearranging between languages.

## Project Structure
<img alt="indexjs" width="60%" align="right" src="/img-docs/indexjs.jpg"/>

Entry point to the project is `index.js`. It currently exports [two
APIs](https://github.com/mongodb-js/bson-transpilers#api), compiling a string
given `inputLang` and `outputLang`, and accessing language's import statements
you might need.

To construct a transpiler, `index.js` needs 3 components:
- `codegeneration/<input language>/Visitor.js` The visitor for the input language.
- `codegeneration/<ouput language>/Generator.js` - The generator for the output language.
- `lib/symbol-table/<input language>to<ouput language>.js` - The symbol table for 
the input+output combination.

The `getTranspiler()` function takes in three arguments: `visitor`, `generator`
and `symbols` to create a transpiler and a `parse tree` that can be walked.

#### TL;DR
- __Visitor:__ visits nodes; processes input language via
  `processs` methods and sends information to either output language's template found in the `Symbol
Template` or an `emit` method in the Generator`.
- __Generator:__ processes output language via `emit` methods, which take in tree nodes and return strings.
- __Type Table:__ a directory of defined types.
- __Symbol Template:__ does string manipulation to provide output based on
  Symbol Type.
- __Symbol Table:__ a directory of the defined symbols and their metadata, including types and templates.

### Tests
Tests for output based on input are broken into two modes: `error` and
`success`. They are stored in `.json` files to easier test multiple outputs per
input language. Each input language has its own directory to be able to handle
input language's edge cases better.

## Adding an Output Language

1. Create a directory in `symbols` directory for your output language:
```shell
mkdir symbols/<output lang>
```
2. Create a `templates.yaml` file to store your language's templates. Inside
   you'll probably want to copy the contents from an existing `templates` file,
clear all `!!js/function >` and replace them with `null`
```shell
touch symbols/<output lang>/templates.yaml
```
3. Add your new language to the `compile-symbol-table.js` file:
```js
const outputLangs = ['java', 'shell', 'python', 'csharp', 'javascript', 'mylanguage'];
```
4. You should now run `npm run compile` to generate a complete symbol table.
   This will be generated in `lib/symbol-table/javascriptto<output lang>` and
`lib/symbol-table/shellto<output lang>`.
5. You will have to require the generated symbol tables in `index.js`:
```js
const javascript<output lang>symbols = require('lib/symbol-table/javascriptto<output lang>')
const shell<output lang>symbols = require('lib/symbol-table/shellto<output lang>')
// and then add another export to module.exports at the bottom of the file:

module.exports = {
  javascript: {
    // all those js exports,
    <output lang>: getTranspiler(JavascriptVisitor, <output lang>Generator, javascrip<output lang>symbols)
  }
  shell: {
    // all those js exports,
    <output lang>: getTranspiler(ShellVisitor, <output lang>Generator, shell<output lang>symbols)
  }
}
```
6. We still don't have a `Generator.js` file required above, so that won't
   quite work yet. So next, create a new directory in `codegeneration` for your
output language:
```shell
mkidr codegenration/<output lang>
```
7. And create a generator file:
```shell
touch codegeneration/<output lang>/Generator.js
```
8. You will need some boiler plate to get you going as the input language's
   visitor file will be looking for a few things. We'd recommend you start with
something like this:
```js
// a lot of languages prefer double quote strings, so there is a helper method
// for that. All other formatters can be found or adjusted in the same file.

const { doubleQuoteStringify } = require('../../helper/format');

// superclass is the input language's visitor file
module.exports = (superclass) => class ExtendedVisitor extends superclass {
  constructor() {
    super();
    // whether or not your output language needs the word new. If that's not
    // the case, remove this line
    this.new = 'new ';
    // regex flags might vary, so we create this object in the Generator file
    this.regexFlags = {
      i: 'i',  // ignore case
      m: 'm',  // multiline
      u: '', // unicode
      y: '',   // sticky search
      g: ''    // global
    };
    // same goes for bsonRegexFlags
    this.bsonRegexFlags = {
      'i': 'i', // Case insensitivity to match
      'm': 'm', // Multiline match
      'x': 'x', // Ignore all white space characters
      's': 's', // Matches all
      'l': '', // Case-insensitive matching dependent on the current locale?
      'u': '' // Unicode?
    };
  }
  // if any emit methods are necessary, they will go here, for example:
  emitDate(ctx, date) {
    // handle date conversion to output lang
  }
  // certain types need to be processed in the visitor file first. To check if
  // your emit function should take parameters, check the input language's
  // visitor file.
};
```
9. You can now require the generator file in `index.js`:
```
const <output lang>Generator = require('./codegeneration/<output lang>/Generator')
```
10. Next thing is tests! Tests are organized under two modes: `error` and
   `success`. Each input language has it's own directory. You can edit output test
cases in each file in those directories based on what the output should be. For example:
```json
// this test is in /test/json/success/javascript/bson-constructors.json
// it's testing different ouptut based on on javascript intput of "{x: {y: '2'}}"
  {
    "description": "Doc with subdoc",
    "javascript": "{x: {y: '2'}}",
    "python": "{'x': {'y': '2'}}",
    "java": "new Document(\"x\", new Document(\"y\", \"2\"))",
    "csharp": "new BsonDocument(\"x\", new BsonDocument(\"y\", \"2\"))",
    "shell": "{x: {y: '2'}}",
    "OUTPUT_LANG": "OUTPUT_CODE"
  },
```

## Adding an Input Language
TODO!
