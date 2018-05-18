/* eslint complexity: 0 */
const JavascriptVisitor = require('../javascript/Visitor');
const bson = require('bson');
const Context = require('context-eval');
const {
  SemanticReferenceError,
  SemanticGenericError
} = require('../../helper/error');

/**
 * This is a Visitor superclass where helper methods used by all language
 * generators can be defined.
 *
 * @returns {object}
 */
class Visitor extends JavascriptVisitor {
  constructor() {
    super();
    this.new = '';
  }

  visitIdentifierExpression(ctx) {
    const name = this.visitChildren(ctx);
    ctx.type = this.Symbols[name];
    if (ctx.type === undefined) {
      throw new SemanticReferenceError({
        message: `symbol "${name}" is undefined`
      });
    }
    // Special case MinKey/MaxKey because they don't have to be called in shell
    if (!ctx.visited && (ctx.type.id === 'MinKey' || ctx.type.id === 'MaxKey') &&
        ctx.parentCtx.constructor.name !== 'FuncCallExpressionContext' &&
        ctx.parentCtx.constructor.name !== 'NewExpressionContext') {
      const node = {
        arguments: () => { return { argumentList: () => { return false; }}; },
        singleExpression: () => { return ctx; }
      };
      ctx.visited = true;
      return this.visitFuncCallExpression(node);
    }
    if (ctx.type.template) {
      return ctx.type.template();
    }
    return name;
  }

  /*
   * BinData needs extra processing because we need to check that the arg is
   * valid base64.
   */
  processBinData(ctx) {
    ctx.type = this.Types.BinData;
    const symbolType = this.Symbols.BinData;

    const binaryTypes = {
      0: this.Types.SUBTYPE_DEFAULT.template,
      1: this.Types.SUBTYPE_FUNCTION.template,
      2: this.Types.SUBTYPE_BYTE_ARRAY.template,
      3: this.Types.SUBTYPE_UUID_OLD.template,
      4: this.Types.SUBTYPE_UUID.template,
      5: this.Types.SUBTYPE_MD5.template,
      128: this.Types.SUBTYPE_USER_DEFINED.template
    };
    const argList = ctx.arguments().argumentList();
    const args = this.checkArguments(this.Symbols.BinData.args, argList);

    const subtype = parseInt(argList.singleExpression()[0].getText(), 10);
    const bindata = args[1];
    if (!(subtype >= 0 && subtype <= 5 || subtype === 128)) {
      throw new SemanticGenericError({message: 'BinData subtype must be a Number between 0-5 or 128'});
    }
    if (bindata.match(/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/)) {
      throw new SemanticGenericError({message: 'invalid base64'});
    }
    const typeStr = binaryTypes[subtype] !== null ? binaryTypes[subtype]() : subtype;

    if ('emitBinary' in this) {
      return this.emitBinData(bindata, typeStr);
    }

    const lhs = symbolType.template ? symbolType.template() : 'Binary';
    const rhs = symbolType.argsTemplate ? symbolType.argsTemplate(lhs, bindata, typeStr) : `(${bindata}, ${typeStr})`;
    return `${this.new}${lhs}${rhs}`;
  }

  executeJavascript(input) {
    const sandbox = {
      RegExp: RegExp,
      DBRef: bson.DBRef,
      Map: bson.Map,
      MaxKey: bson.MaxKey,
      MinKey: bson.MinKey,
      ObjectId: bson.ObjectID,
      Symbol: bson.Symbol,
      Timestamp: bson.Timestamp,
      Code: function(c, s) {
        return new bson.Code(c, s);
      },
      NumberDecimal: function(s) {
        if (s === undefined) {
          s = '0';
        }
        return bson.Decimal128.fromString(s.toString());
      },
      NumberInt: function(s) {
        return parseInt(s, 10);
      },
      NumberLong: function(v) {
        if (v === undefined) {
          v = 0;
        }
        return bson.Long.fromNumber(v);
      },
      ISODate: function(s) {
        return new Date(s);
      },
      Date: function(s) {
        const args = Array.from(arguments);

        if (args.length === 1) {
          return new Date(s);
        }

        return new Date(Date.UTC(...args));
      },
      Buffer: Buffer,
      __result: {}
    };
    const ctx = new Context(sandbox);
    const res = ctx.evaluate('__result = ' + input);
    ctx.destroy();
    return res;
  }
}

module.exports = Visitor;
