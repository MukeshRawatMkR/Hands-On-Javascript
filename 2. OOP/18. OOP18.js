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
console.log(p1.category);//undefined.


// console.log(Person.#category2);//private field.