//Arrow Functions AKA (fat arrow).
//used for concise syntax.
//but there is one fundamental difference which is lexical scoping of 'this'.
// lexical scoping means that 'this' is determined by the surrounding code, which is the context in which the function is defined, not the context in which it is called.
//for example:

const obj = {
  value: 25,
  regularFunction: function() {
    console.log(this.value);
  },
  arrowFunction: () => {
    console.log(this.value);
  }
};

obj.regularFunction(); // 25
obj.arrowFunction(); // undefined, bcz arrow functions do not have their own 'this' context, it looks at the 'this' value from the enclosing lexical context, which is the global object in this case.


/* 
ArrowFunction or fat arrow:
Defined as () => { ... }. Arrow functions do not get their own this. Instead, they use whatever this was in the scope where they were created.
Here, the arrow function is created directly inside the object literal, not inside another function. At that top level, the enclosing this is the global object (window in browsers, undefined in strict mode in Node).
So when you run obj.arrowFunction(), it ignores the obj binding. It looks outward to the global scope, finds no value, and prints undefined.
*/


/*
Rule to remember:
Normal functions: this is set by how the function is called.
Arrow functions: this is set by where the function is defined.
*/

/*
Don't use fat arrow if you need to access the 'this' context of the calling object.
*/


//next file-> how to write arrow functions differently