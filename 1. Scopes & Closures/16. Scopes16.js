//Named function expression
const myFunc = function namedFunc() {//named function: if we need to reuse the function in our codebase.
  console.log("function expression..");
};
myFunc();



//Anonymous function expression: if we don't need to reuse the function, in our whole codebase only once it'll be executed.
const myFunct = function() {//no named function
  console.log("function expression...");
};
myFunct();


//where can we use these function expressions: 
//1. To pass a function as an argument to another function
function f(fn){
    //some logic
    fn();
}
f(function f(){   });


//2. As a callback function
setTimeout(function() {
  console.log("function expression...");
}, 1000);

//3. Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("function expression...");
})();


/*
Differentiating between named and anonymous function expression:
1. Anonymous functions are hard to use in recursion, whereas named function expressions can be easily integrated in a recursive environment.
example with the help of array.map function:
map is an in-built function for arrays in JS. it takes an argument which is expected to be a function. This function is applied to each element of the array, and the results are collected into a new array.
arr.map(function(){});//function expression passed as an argument to map.
map automatically internally calls this function for each element in the array.

2. Named function expression improves readability of the code.

3. Anonymous functions are hard to debug, bcz when you check the call stack of the functions, they you will not find any name for anynous function

*/

//demo in next file