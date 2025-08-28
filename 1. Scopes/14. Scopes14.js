/*
var → initialized as undefined in phase 1.
function declaration → entire function available before execution.
let / const → not accessible until after declaration (temporal dead zone).
*/

//------------------------------------------------Hoisting --------------------------------------------------------------------------
//Hoisting is a consequence of the scoping mechanism of JS, bcz of the fact that JS executes our code in 2 phases, a lot of variables are already known during the phase 1, and then they are accessed in phase 2. so it looks like to a lot of people that JS knows about a few variables before their declaration. and indeed it is true, cuz during phase 1 all the formal declarations are read, so JS indeed knows about the variables before execution phase. and this mechanism of knowing variables before their declaration line is termed as hoisting. This word is not an actual word present in the official ecma script docs. The JS community came up with this one word defination for this consequence.


