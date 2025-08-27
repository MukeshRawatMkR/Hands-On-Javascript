//To add function in prototype object using function constructor.

function Person(n) {

    this.name = n;
}


Person.prototype.displayName = function () {
     return this;
     };

let p = new Person("Mukesh Rawat");
// console.log(p);

// console.log(Person.prototype);
console.log("hEllo : ",p.displayName());


//this all is done by a class, BTS.
//it all reflected to already created objects. unlike in JAVA & CPP.


//next file: prototype in Inheritance.