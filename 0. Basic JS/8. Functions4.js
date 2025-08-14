//functions with default parameters
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2)); // 10
console.log(multiply(5));    // 5

//in above code 5 is passed as the first argument and the second argument is not provided, so it takes the default value of 1, but there is a catch, if the second argument is explicitly passed as undefined, the default value will not be used.
console.log(multiply(5, undefined)); // 5
//so, the default value is only used when the argument is not provided at all.



// to pass unlimited arguments, we can use the (rest) parameter syntax
console.log("Rest parameter syntax: ");
function multiply(...args) { //here args is an array of all arguments passed.
  console.log(args);
}

multiply(5, 2);
multiply(5);
multiply("Mukesh Rawat", 25, 1);
