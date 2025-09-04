//output based questions.

function outer() {
  let x = 5;
  function inner() {
    return x;
  }
  return inner;
}

const fn = outer();
console.log(fn());//5
