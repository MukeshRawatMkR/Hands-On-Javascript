//IQ: Builder Pattern: https://chatgpt.com/c/68ad4f5a-5014-8320-87f2-1007f631e017
//that's where static keyword can be useful. We can create a static method that returns a new instance of the class, and use it to implement the builder pattern.

class Person {
    constructor(Builder) {
        if (!Builder.name || !Builder.age) {
            throw new Error("Missing required fields");
        }
        if(Builder.name == ""||Builder.age == 0)
            throw new Error("Invalid input");
        this.name = Builder.name;
        this.age = Builder.age;
    }
    displayPerson() {
        console.log(this.name + " is " + this.age + " years old.");
    }

static get Builder(){
    class Builder {
        constructor() {
            this.name = "";
            this.age = 0;
        }

        setName(name) {
            this.name = name;
            return this;
        }

        setAge(age) {
            this.age = age;
            return this;
        }

        build() {
            return new Person(this);
        }
    }
    return Builder;//it's a class.
    }
}

// Usage
const person = new Person.Builder()
    .setName("Mukesh Rawat")
    .setAge(25)
    .build();

person.displayPerson();

//now with builder pattern we have solved the issue of having a large constructor with many parameters and validation logic in the constructor itself.