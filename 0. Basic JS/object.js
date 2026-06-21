//Objects are mutable.
const user = { name: "Mukesh", age: 25, city: "Lansdowne" };
delete user.age;// to delete a key in an object.

console.log(user); // { name: "Mukesh", city: "Lansdowne" }
console.log(user.name);
console.log(user['city']);