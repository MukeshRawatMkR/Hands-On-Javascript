//variable and function can be used as hoisting.

// VARIABLE HOISTING:

//In terms of variables, let and const do not allow hoisting.
console.log(myName);
var myName;
console.log(myName);


//only the declaration is moved to the memory in the compile phase.
//hence the value of variable 'a' is undefined bcz a is printed without initiliazation.
var a;
console.log(a);
a = 10;
console.log(a);




var x = 7;
 function welcome(){
    y='world';
    console.log(y);//world
    var y;//if I skip this statement, then 'y' becomes auto-global, which means i can access it from anywhere.
 }
 welcome();
 console.log(y);//referecne eror, y is not defined.



 var a;
if(a === undefined){
    console.log(a);
}
a=10;
