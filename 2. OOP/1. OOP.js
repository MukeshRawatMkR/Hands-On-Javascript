//classes: data members(properties) and member functions(methods)
console.log("0");
class Person {
    constructor(name, age) {
        console.log("Inside Constructor");
        this.name = name;//data member
        this.age = age;
    }

    greet() {//member function, here we don't write the function keyword.
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
// console.log(typeof Person);//function, bcz functions are first-class objects in JS, class is nothing but a wrapper around the function.
// console.log(Person);//class Person { ... }
console.log("1");
const john = new Person("Mukesh Rawat", 25);
john.greet();

console.log("2");

//next file-> how to make class from scratch.