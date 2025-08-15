
//push, pop, shift, unshift, concat, slice, splice, forEach
let arrayMethods = [
    "push",
    "pop",
    "shift",
    "unshift",
    "concat",
    "slice",
    "splice",
    "forEach"
];
console.log(arrayMethods);

arrayMethods.push("hello");
console.log(arrayMethods);

arrayMethods.pop();
console.log(arrayMethods);

//shift
arrayMethods.shift();//removes the first element
console.log(arrayMethods);

//unshift
arrayMethods.unshift("first");
console.log(arrayMethods);

arrayMethods.unshift("zero");//to the beginning.
console.log(arrayMethods);






/*
// Properties
array.length

// Methods
array.push()        // Add elements to end
array.pop()         // Remove last element
array.shift()       // Remove first element
array.unshift()     // Add elements to start
array.concat()      // Merge arrays
array.slice()       // Copy part of array
array.splice()      // Add/remove elements
array.forEach()     // Iterate over array
array.map()         // Transform array
array.filter()      // Filter elements
array.reduce()      // Accumulate values
array.find()        // Find first matching element
array.findIndex()   // Find index of first matching element
array.includes()    // Check if value exists
array.indexOf()     // Find index of value
array.sort()        // Sort array
array.reverse()     // Reverse array
array.every()       // Test if all elements pass condition
array.some()        // Test if any element passes condition
array.join()        // Join elements into string
*/