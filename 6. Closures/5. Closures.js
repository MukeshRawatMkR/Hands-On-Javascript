function outer() {
  let a = 10;
  return function(b) {
    return a + b;
  };
}

const add = outer();
console.log(add(5));//15
console.log(add(20));//30


