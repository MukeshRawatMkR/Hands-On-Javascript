//Using "use strict" in functions with rest, default, or destructured parameters is a syntax error.for example:
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
// sum();//error