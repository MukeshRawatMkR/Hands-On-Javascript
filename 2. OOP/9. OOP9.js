//this keyword with arrow functions
let obj3 = {
    firstName: "Mukesh",
    lastName: "Rawat",
    fun: () => {
        console.log(this.firstName + " " + this.lastName);
    }
};

obj3.fun();//undefined undefined, bcz arrow functions do not have their own 'this' context, so 'this' follows lexical scoping to find its value, if it doesn't find it then at last it refers to the global object (window in browser) or undefined in strict mode.
//lexical scoping means that the value of 'this' is determined by the surrounding code where the arrow function is defined, not where it is called.

// in lexical scoping JS follows the scope chain to find the value of 'this', starting from the innermost scope (the function itself) and moving outward until it finds a value or reaches the global scope(which is window in browser).


//next code:
let obj = {
    firstName: "Mukesh",
    lastName: "Rawat",
    fun: function () {
        let f =  () => {
            console.log(this.firstName + " " + this.lastName);//here lexical scoping is in play.
        }
        f();
    }
};
obj.fun();// we can print the values bcz of lexical scoping.

//in arrow functions, JS resolve it lexically, so 'this' refers to the outer function's context.