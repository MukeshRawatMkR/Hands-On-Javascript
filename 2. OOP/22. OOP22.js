//Alias in object destructuring: giving nickname at the time of object destructuring.
const person = {
    fName: "Mukesh",
    age: 25,
    location: "Kotdwara, Lansdowne, Uttarakhand"
};

//destructuring assignment
const { fName: firstName, age, location: place } = person;

console.log(firstName); // Mukesh
console.log(age); // 25
console.log(place); // Kotdwara, Lansdowne, Uttarakhand


//next file: nested object destructuring.