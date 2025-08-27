// Intro to Prototypes in OOP

//in this series of section, i'll know what was that 3rd step(prototyping), that 'new' keyword does when we create a new object.


//JS is object linked to object, not class based, and the sole reason is prototype.

//to access that object having  no name:
console.log(Object.prototype);//it contains all the properties and methods that are inherited by all objects in JavaScript like toString(), hasOwnProperty(), etc.
//Object is a function, to get that function:
console.log(Object.prototype.constructor);//ƒ Object() { [native code] }, points back to line number 9(Object.prototype).
//code:
console.log(Object===Object.prototype.constructor);

//prototype is an object that is associated with every function and object in JavaScript.
//It allows you to add new properties and methods to existing objects.

//Code:function or class, cuz class is just a wrapper around function in JavaScript.
function Person(){

}
console.log(Person());
console.log(Person.prototype);
//Person is a function, to get that function:
console.log(Person===Person.prototype.constructor);//points back to line number 19(Person).


//to access that hidden link in fig ->  (--proto--) AKA Dunder proto to access one level up unnamed object.


//next file: to add member function to the prototype in function constructor.