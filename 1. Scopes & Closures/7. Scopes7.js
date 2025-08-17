//disclaimer: var doesn't care your block scope, it only cares about function scope and global scope.
//If you use var inside a block (like if, for, {}), it ignores the block and goes straight to the nearest function scope or the global scope if no function exists.

var x = 10;//GS  10
if(true){
    var x = 20;//GS 20
    var y = 30;//GS 30
    console.log(x, y);//20 30
}
console.log(x, y);//20 30

/*
Output:
1. 20 30
2. 20 30
*/

/*
Step-by-step:

var x = 10; → creates global x = 10.
if (true) { var x = 20; } → same global x is reassigned to 20., this one line is powerful.
var y = 30; inside if also leaks to global scope.
So after if, x = 20 and y = 30.
That’s why both logs show 20 30.
*/


/*
var x = 10;//GS  
console.log(x, y);//10 undefined
if(true){
    var x = 20;//GS 
    var y = 30;//GS 
    console.log(x, y);//20 30
}
console.log(x, y);//20 30
*/
