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
// const { fName, age, location: { city, state } } = person;
const{fName,location:{state}}=person;//that's how we destructure our nested object
const {location:{city}}=person;
console.log(state);
console.log(fName);
console.log(city);
// console.log(fName); // Mukesh
// console.log(age); // 25
// console.log(city); // Kotdwara
// console.log(state); // Uttarakhand
const person2 = {
    fName: "Mukesh",
    age: 25,
    location: {
        city: {
            pin: 246149
        },
        state: "Uttarakhand"
    }
};

let{location:{city:{pin}}} = person2;
console.log(pin);



//next file: tips on objects