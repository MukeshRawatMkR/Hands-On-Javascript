//static keyword: associated with class not objects.

class Person {
    static category = "Human"; //static member.
    static #category2 = "Humann"; //private static member.

    constructor(n, a) {
        this.name = n;
        this.age = a;
        console.log(Person.category);//saphiens
        console.log(Person.#category2);//Humann
    }
}

console.log(Person.category);//Human
Person.category = "saphiens";//updating the static member.
console.log(Person.category);//saphiens
let p1 = new Person("Mukesh Rawat", 25);
console.log(p1.category);//undefined. bcz category is a static member and not accessible through instance, we only access it through the class itself.


// console.log(Person.#category2);//private field.

//what's the use case of static members?
//1. Utility functions: Static methods can be used to create utility functions that are related to the class but don't require an instance. for example: we have Math class in JS which provides many static methods, like Math.max() and Math.min().


//there is a problem in our class, so far we have been initializing the data members either function constructor or using class properties. But this approach can lead to a lot of boilerplate code, especially when we have many properties to initialize, and if we totally avoid the constructor to initialize them and use setter methods instead, it can become cumbersome. then the solution is the -> Builder Pattern, it's a design pattern that allows for the step-by-step construction of complex objects.


//next file: design patterns -> builder pattern.