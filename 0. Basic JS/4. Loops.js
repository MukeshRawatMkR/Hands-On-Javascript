/*
for...in → Iterate over object keys. Example: process API response fields.

for...of → Iterate over iterable data. Example: loop through orders or products.

forEach() → Run callback for each array item. Example: render product cards.
*/

/*
1. for loop
    - Use when you know how many times to iterate.
*/
for (let i = 0; i < 5; i++) {
  console.log('for loop:', i);
}

/*
2. while loop
    - Use when the number of iterations is unknown; loop until a condition is false.
*/
let count = 0;
while (count < 5) {
  console.log('while loop:', count);
  count++;
}

/*
3. do...while loop
    - Like while, but always runs at least once.
*/
let num = 0;
do {
  console.log('do...while loop:', num);
  num++;
} while (num < 5);

/*
4. for...in loop
    - Use to iterate over object properties.
*/
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log('for...in loop:', key, obj[key]);
}

/*
5. for...of loop
    - Use to iterate over iterable objects (arrays, strings, maps, sets).
*/
const arr = [10, 20, 30];
for (let value of arr) {
  console.log('for...of loop:', value);
}

/*
6. Array.forEach()
    - Use for executing a function for each array element.
*/
arr.forEach((value, index) => {
  console.log('forEach:', index, value);
});


// break and continue keywords:
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log('continue at 2');
    continue;
  }
  if (i === 4) {
    console.log('break at 4');
    break;
  }
  console.log('looping:', i);
}
