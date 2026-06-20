//Objects are mutable.
const user = { name: "Mukesh", age: 25, city: "Lansdowne" };
delete user.age;

console.log(user); // { name: "Mukesh", city: "Lansdowne" }
console.log(user.name);
console.log(user['city']);