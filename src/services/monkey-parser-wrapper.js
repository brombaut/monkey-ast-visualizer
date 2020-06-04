const parser = require("@brombaut/monkey-parser");

const parse = function(input) {
  parser.parse(input);
  if (parser.errors().length > 0) {
    return parser.errors();
  }
  const ast = parser.ast();
  return JSON.stringify(JSON.parse(ast), null, 4);
};

export default {
  parse
};
