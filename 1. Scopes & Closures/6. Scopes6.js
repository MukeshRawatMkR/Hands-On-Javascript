var teacher = "John Doe";
function fun(){
    teacher = "Mukesh";
    content = "JS";
    console.log(content, teacher);//JS Mukesh,this JS value is not coming from the function, it's coming from the global scope bcz of (automatic global) variable creation, cuz it was not formally declared in the function.
}
fun();
console.log(content, teacher);//JS Mukesh, bcz of (automatic global) variable creation

//in automatic global variable creation, JS creates variables in the global scope if they are not declared with var, let, or const in its function scope or even outside of it(which means they become global).

//defination of autoglobals: automatic global variables are those variables which are created automatically by JS in the global(global variable) scope when they are not declared with var, let, or const.

var teacher = "John Doe";
function fun(){
    teacher = "Mukesh";
    content = "JS";
    console.log(content, teacher);
}
console.log(teacher);//John Doe
console.log(content);//ReferenceError: content is not defined, cuz here variable is used as RHS(variable is being consumed), hence JS can't make it autoglobal.
fun();//it'll not execute because of the ReferenceError in line number 21


/*


var teacher = "John Doe";//global scope
function fun(){
    teacher = "Mukesh";
    content = "JS";
    console.log(content, teacher);
}
console.log(teacher);
fun();
console.log(content);

output:
1. John Doe.
2. JS Mukesh
3. JS


*/


//Note: To stop auto global we can use "use strict"; directive at the beginning of our script or function.
//basically two modes are there in JS strict mode and non-strict mode AKA sloppy mode.

//to be continued in next file.