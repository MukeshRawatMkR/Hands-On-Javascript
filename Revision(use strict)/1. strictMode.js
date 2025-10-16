"use strict";

//non-strict mode is also known as sloppy mode.
//SM can be applied to whole file or to individual functions.

function myStrictFunction() {
  // Function-level strict mode syntax
  "use strict";
  function nested() {
    return "And so am I!";
  }
  return `Hi! I'm a strict mode function! ${nested()}`;
}
function myNotStrictFunction() {
  return "I'm not strict.";
}

myStrictFunction();
myNotStrictFunction();

