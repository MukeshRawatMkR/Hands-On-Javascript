/*
    JavaScript Scopes Explained
*/

//var is both function scoped and globally scoped variable.
//var supports hoisting.

// 1. Global Scope
var globalVar = "I'm global!";

function globalScopeExample() {
    // Can access globalVar here
    console.log(globalVar); // Output: I'm global!
}

globalScopeExample();

// 2. Function Scope
function functionScopeExample() {
    var functionVar = "I'm local to this function!";
    console.log(functionVar); // Output: I'm local to this function!
}

functionScopeExample();
// console.log(functionVar); // Error: functionVar is not defined

// 3. Block Scope (let, const)
if (true) {
    let blockLet = "I'm block scoped!";
    const blockConst = "Me too!";
    console.log(blockLet);   // Output: I'm block scoped!
    console.log(blockConst); // Output: Me too!
}
// console.log(blockLet);   // Error: blockLet is not defined
// console.log(blockConst); // Error: blockConst is not defined

// 4. Lexical Scope (Nested Functions)
function outer() {
    var outerVar = "I'm from outer!";
    function inner() {
        console.log(outerVar); // Output: I'm from outer!
    }
    inner();
}
outer();

// 5. Closures (Functions remember their scope) which means functions can access variables from their outer scope even after that scope has finished executing, this is because of **closure**.
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

/*
    Summary:
    - Global scope: accessible everywhere.
    - Function scope: variables declared with var inside a function.
    - Block scope: variables declared with let/const inside { }.
    - Lexical scope: inner functions access outer variables.
    - Closures: A closure is when a function “remembers” the variables from its lexical scope, keeping a reference to them even after the outer function has returned.
*/