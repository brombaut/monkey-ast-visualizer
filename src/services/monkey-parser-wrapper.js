const parser = require("@brombaut/monkey-parser");

const parse = function(input) {
  try {
    parser.parse(input);
  } catch (e) {
    return parser.errors().join("\n");
  }
  const ast = parser.ast();
  return JSON.stringify(JSON.parse(ast), null, 4);
};

export default {
  parse
};
