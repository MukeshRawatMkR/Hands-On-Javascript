var teacher = "John Doe";
function fun(){
    teacher = "Mukesh";
    content = "JS";
    console.log(content, teacher);//JS Mukesh, bcz of (automatic global) variable creation
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
console.log(content);//ReferenceError: content is not defined
fun();//it'll not execute because of the ReferenceError in line number 21
