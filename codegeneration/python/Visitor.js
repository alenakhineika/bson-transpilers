/* eslint complexity: 0 */
const Python3Visitor = require('../../lib/antlr/Python3Visitor').Python3Visitor;

/**
 * This is a Visitor that visits the tree generated by the Python3.g4 grammar.
 *
 * @returns {Visitor}
 */
class Visitor extends Python3Visitor {
  constructor() {
    super();
  }
  start(ctx) {
    return this.visitSingle_input(ctx);
  }
}

module.exports = Visitor;
