//Now about the Block Scope of let & const, both follow block scope(once they are declared) which means we can't access them before they are declared.

//let keyword:
function fun(){
    console.log(a);//ReferenceError: Cannot access 'a' before initialization, this error is coming from phase 2, because a is in TDZ.
    let a = 10;
    console.log(a);//10
}
fun();
/*
Breakdown:
Phase 1 (Memory Creation / Hoisting):
let a is hoisted but left uninitialized. Engine just reserves a slot. No error here.
Phase 2 (Execution):
First console.log(a) executes. Engine checks a. It finds the binding exists but is still in the Temporal Dead Zone (TDZ) because initialization hasn’t run yet. That’s when the ReferenceError is thrown.
So the error comes from execution phase(2), not scope resolution phase(1).
*/



//now new term popped up: Temporal Dead Zone (TDZ) -> It refers to the time period from the start of the block until the variable is declared and initialized. During this time, the variable is in the TDZ and cannot be accessed, if try to access it will throw ReferenceError.
//so TDZ applies to let and const variables and also class declarations, bcz they are block-scoped and cannot be accessed before their declaration.

