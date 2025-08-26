//object destructuring
const person = {
    fName: "Mukesh",
    age: 25,
    location: "Kotdwara, Lansdowne, Uttarakhand"
};

//destructuring assignment
const { fName, age, location } = person;

console.log(fName); // Mukesh


//to add our entire object into another object we use (spread operator).
const livingBeing = {
    planet: "Earth",
    ...person
};
console.log(livingBeing);



//if we try to update the properties of existing properties.
const updatedLivingBeing = {
    ...livingBeing,
    fName: "John",
    age: 30,
    location: "New York",
    planet: "Mars"
};
console.log(updatedLivingBeing);
//which means the property that are added at the end will overwrite the existing properties.


//next file: alias in object destructuring.