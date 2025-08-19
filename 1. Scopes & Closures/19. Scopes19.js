function fun(fn){
    const arr = [1,2,3];
    fn(arr);
}
fun(function gun(arr){
    console.trace("Call Stack");// this function traces the call stack and prints the current call stack.
})

console.log("Anonymous Function");
// what if i make gun function an anonymous function:
fun(function(arr){
    console.trace("Call Stack");  // well it traced it, but don't know the name for anonymous function expression, hence no any naming entry, making it hard to debug.
})


//so when to use anonymous function expressions?
//1. When you need a one-time use function
//2. when code logic is too simple to warrant a named function

//2:
const square = function(num){
    return num * num;
}
let array = [1,2,3,4,5];
let result = array.map(square);
console.log(result);



//in next file -> arrow functions which are/can also be anonymous functions.