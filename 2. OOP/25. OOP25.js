// Rest parameters
const person = {
    fName: "Mukesh",
    lName: "Rawat",
    age: 25,
    sex: "Male"
};

console.log(person);

const {sex, ...restPerson} = person;//to remove sex key and value from person object and return the rest object. using 'rest' parameters
console.log(restPerson);


//next file: array destructuring
