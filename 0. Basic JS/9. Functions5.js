// In JS functions are first-class citizens.
// This means that functions can be treated like any other value.
// They can be assigned to variables, passed as arguments, and returned from other functions.

function fn(){
    // function body
    return function innerFn(){
        // inner function body
        return 10;
    }
}
//above function is known as a higher-order function, which is a function that returns another function.
//use cases: 
// 1. Function composition
// 2. Currying
// 3. Memoization
// 4. Debouncing
// 5. Higher-order components in React.


function fn3(fn){
    fn();
    console.log("fn3");
}
function hello(){
    console.log(" hello");
}
fn3(hello);
//above function is an example of a higher-order function.

