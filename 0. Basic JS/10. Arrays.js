//In JS, arrays are objects that allow you to store multiple values in a single variable.
let arr1 = []; //empty array
let arr2 = [undefined, null, "Mukesh"]; //array with mixed values(heterogeneous values).
console.log(typeof arr1); //object;
console.log(typeof arr2); //object;


//some more concepts related to arrays:
let arr3 = [1, 2, 3, 4, 5]; //array with numbers
console.log(arr3[5] );//undefined, as there is no value at index 5
arr3[7]=10;
console.log(arr3);//it'll fill the rest(missing) with empty slots having value 'undefined'.

//in console do we ever see the undefined values after executing some statements?
//bcz, the console wants to return some value, and it shows 'undefined' if it doesn't find any return value, but in the case of function if it has any return value, it will show that instead.

let a1 = new Array(1,2,3);//another way to create an array.
console.log(a1);

let a2 = new Array(4);//it'll create an array with 4 empty slots, having value 'undefined'.
console.log(a2);

let a3 = new Array(7).fill(7);//it'll create an array with 7 elements, all having value 7.
console.log(a3);