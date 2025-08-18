//Scoping mechanism Function Expression
//so far we have been defining functions using function declarations with function keyword.

/*
In JS, functions are first-class citizens, why?
1. we can return a function from another function.
2. we can pass a function as an argument to another function.
3. we can also store a function in a variable.
and many more things.
*/

// Function Expression: storing function in a variable.

const myFun = function fun () {//named function expression.
  console.log("function expression");
};
myFun();
// fun(); // ReferenceError: fun is not defined

//here we are creating a function but the first valid token is not the function keyword, hence we call this type of instruction as function expression.

//more ways to define function expressions:1
const myFunc = function() { // anonymous function expression.
  console.log("function expression");
};
myFunc();

//2
const myFunct = () => {//arrow function expression.
  console.log("function expression");
};
myFunct();

//3
(function myFuncti(){//IIFE
  console.log("function expression...");
})();
 