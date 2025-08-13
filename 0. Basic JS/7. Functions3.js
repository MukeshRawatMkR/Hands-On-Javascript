// Hands-On-Functions

let num = 1;

function add(num) {
  num = num + 1;
  console.log("function num: ", num);
}

console.log("global num: ", num);
console.log(add(num));
console.log("global num after add: ", num);//which means nums is passed by value not by reference.


