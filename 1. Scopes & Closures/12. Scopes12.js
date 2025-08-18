let x = 5;
console.log(x);
let x = 10;
console.log(x);
//in above piece of code, the error is coming from phase 1, bcz x is re-declared with let in the same scope, which is global scope.

//let and const cannot be re-declared in the same scope, this is a key difference from var, but in var we can re-declare the same variable in the same scope without any error.