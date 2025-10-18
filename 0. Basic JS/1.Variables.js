/*
Total Data types:
Undefined, Null, Boolean, String, Symbol, Number and object.

*/

// THis is comment 
/*
Hello Guys
*/
var name = "John Doe";
let name2 = 'Mukesh Rawat';
const name3 = "Rohit Kumar";

let bigNumber = 1234567890123456789184840n;//stores big integer.
console.log(typeof(bigNumber));
console.log(typeof null);//object, which is a historically mistake done by JS community, now they can't change it.


var name4 = `Hello My Name is Mukesh Rawat`;

const obj = {
  name: "John Doe",
  name: "Jane Smith",
  post: {
    createdAt: "Hello",
    post: "hsesoefsef",
  },
  age: 30,
  city: "New York",
};
let abc;
console.log(abc);
let cde = null;
console.log(cde);
console.log(typeof obj);

const notAvailable = undefined;
console.log(notAvailable);
console.log(obj.post.post);
console.log(name2);

console.log("Hello Guys:", name, ",", name2, ",", name3);

console.log(name4);


//6 =+%
//console.log returns undefined. 
let printt=console.log("Mukesh Rawat");
console.log(printt);