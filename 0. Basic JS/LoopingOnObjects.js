//Most important 💪🏼

//6 = +% `
let person={
    name:"Mukesh",
    age:25,
    city:"Landour"
};
let keysOfPerson=Object.keys(person);
console.log(keysOfPerson);//returns array of keys of object.

console.log(Object.values(person));//returns array of values of object.


//to access of both:
console.log(Object.entries(person));

//to loop over an object using for...of
for(let value of Object.entries(person)){

    console.log(value);
}

//using for...in to loop over keys of an object
for(let key in person){
    console.log(key, person[key]);
};


