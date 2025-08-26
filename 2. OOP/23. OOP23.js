//Nested object destructuring
const person = {
    fName: "Mukesh",
    age: 25,
    location: {
        city: "Kotdwara",
        state: "Uttarakhand"
    }
};

//destructuring assignment
const { fName, age, location: { city, state } } = person;

console.log(fName); // Mukesh
console.log(age); // 25
console.log(city); // Kotdwara
console.log(state); // Uttarakhand
