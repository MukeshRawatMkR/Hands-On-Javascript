//Array Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
const extendedNumbers = [...rest, 7, 8];//unpack

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]
console.log(extendedNumbers); // [3, 4, 5, 7, 8]

//in array des sequencing matters but the name does not.
//but in object destructuring, the order doesn't matter, but the name does.

//next folder: Prototypes in OOP