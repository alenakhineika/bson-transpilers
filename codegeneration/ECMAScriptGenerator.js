const CodeGenerator = require('./CodeGenerator.js');
const JavaVisitor = require('../lib/JavaParserVisitor').JavaParserVisitor;

/**
 * This Visitor walks the AST generated by the transformers and produces code.
 */
function Visitor() {
  CodeGenerator.call(this);
  JavaVisitor.call(this);
  return this;
}

Visitor.prototype = Object.create(CodeGenerator.prototype);
Object.assign(Visitor.prototype, JavaVisitor.prototype);
// For every input language, can "inherit" the generated visitNode methods.

Visitor.prototype.constructor = Visitor;

Visitor.prototype.visitChildren = function(ctx) {
  let code = '';
  for (let i = 0; i < ctx.getChildCount(); i++) {
    code += this.visit(ctx.getChild(i));
  }
  return code.trim();
};

Visitor.prototype.visitTerminal = function(ctx) {
  return ctx.getText();
};

module.exports = Visitor;
