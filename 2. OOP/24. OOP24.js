//Tips on objects

//spread operator:
const person = {
    fName: "Mukesh",
    lName: "Rawatt",
    age: 25
};

const person2 = {
    location: {
        city: "Kotdwara",
        state: "Uttarakhand"
    }
};
const person3 = {...person, ...person2 };//combining multiple objects.
console.log(person3);


//to create a clone of an object, again we use spread operator.
const person4 = {...person};
console.log(person4);


//if we want to update a key of any existing object and at the same time wanna create a new one:
// const person5 = {...person, keyToUpdate: "newValue"};
const person5 = {...person, fName: "Mukesh Rawat"};

console.log(person5);


//can give default values also:
const{lName = "Rawat"} = person;//if default value already exists then it will not be overwritten.
console.log(lName);


//next file: rest parameters