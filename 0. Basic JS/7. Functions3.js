// Hands-On-Functions

let num = 1;

function add(num) {
  num = num + 1;
  console.log("function num: ", num);
}

console.log("global num: ", num);
console.log(add(num));
console.log("global num after add: ", num);//which means nums is passed by value not by reference.


// if we do not return a value from the function, it will return undefined by default.
//for example:
function noReturn() {
  let a = 5;
  let b = 10;
  let c = a + b;
  console.log("Inside function: ", c);
}

let result = noReturn();
console.log("Outside function: ", result);


//to print function defination:
console.log(noReturn.toString());
//or
//to print defination of function
console.log(noReturn); 
