//Fat arrow

//If fat arrow has only one line logic to return something then we don't need to use return keyword.
const add = (a, b) => a + b;


//if fat arrow is only taking a single parameter, we can omit the parentheses.
const square = x => x * x;

//note: if there are more than 1 or no arguments, we need to use parentheses.


//code:
const arr = [1, 2, 3, 4, 5];
const result = arr.map(x => x * 100);
console.log(result);


//next file: IIFE 