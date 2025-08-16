//TBW
// Deep dive into var scoping
var teacher = "John Doe";
function fun(){
    var teacher = "Jane Wick";
    console.log("hello", teacher);
}
function gun(){
    var student = "Mukesh";
    console.log("hello", student);
}
fun();
gun();

/*

now we'll see how JS executes the code in two phases:
phase 1: creation phase(compilation)
step 1-> it'll go line by line.
step 2-> if it sees variable as LHS, i.e, if it sees a formal declaration(var, let , const) of a variable, then it asks a scope manager for the scope of the variable. if the variable is found in the current scope then it is good, else we go one level up.


phase 2: execution phase

*/


/*
now we'll see how JavaScript executes the code:
step 1: global execution context is created
step 2: function fun() is called
step 3: a new execution context is created for fun()
step 4: variable teacher is created in fun()'s scope
step 5: "hello" and "Jane Wick" are logged to the console
step 6: function gun() is called
step 7: a new execution context is created for gun()
step 8: variable student is created in gun()'s scope
step 9: "hello" and "Mukesh" are logged to the console
step 10: all execution contexts are popped off the stack
*/

/*

Any variable is used only in two ways:
RHS -> i.e. when we consume the variable
LHS -> i.e. when we assign value or declare the variable
For example:
var x = 99; // LHS - we are assigning it a value
console.log(x); // RHS - we are consuming the value of the variable

*/

/*

Lexical Scoping/Lexical Parsing/Static Scoping:
JS does scope resolution using lexical scoping mechanism. It is also called as static scoping. In lexical scoping we allocate scopes to the variables during compile time. SO in JS, values to the variables are allocated in phase two i.e execution phase but scope of the variable is decided during phase 1.

*/

/*

var:

var helps us to define global and function scoped variables. We cannot make a block scoped variable with var.
Now a question can be, how is function scope different than block scope?
A variable having function scope has a special property, that it can be defined anywhere in the function but will be still accessible through the whole function.


code :
function fun() {
console.log("the value of x here is",x);//undefined
var x = 10;//if we would have use (let), it would have been block scoped and gave us an reference error because of the temporal dead zone.
console.log("the value of x here is",x);//10
}
fun();

*/