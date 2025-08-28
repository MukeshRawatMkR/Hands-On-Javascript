/*
    JavaScript uses lexical (static) scoping.
    This means the scope of a variable is determined by its position in the source code.
    Let's see examples:
*/

// Global Scope
let globalVar = "I'm global!";

function outerFunction() {
    // Function Scope (outerFunction)
    let outerVar = "I'm in outerFunction!";

    function innerFunction() {
        // Function Scope (innerFunction)
        let innerVar = "I'm in innerFunction!";
        console.log(globalVar); // Accessible: defined in global scope
        console.log(outerVar);  // Accessible: defined in outerFunction
        console.log(innerVar);  // Accessible: defined here
    }

    innerFunction();

    // console.log(innerVar); // Error: innerVar is not defined here
}

outerFunction();

// Block Scope (with let/const)
if (true) {
    let blockVar = "I'm in a block!";
    console.log(blockVar); // Accessible here
}
// console.log(blockVar); // Error: blockVar is not defined outside the block

/*
    Summary:
    - Variables declared with var are function-scoped.
    - Variables declared with let/const are block-scoped.
    - Inner scopes can access variables from outer scopes (scope chain).
    - Outer scopes cannot access variables from inner scopes.
*/