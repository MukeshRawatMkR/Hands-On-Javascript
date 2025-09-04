//todo
//Dry run it:

function outer() {
  let arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      return i;
    });
  }
  return arr;
}

const funcs = outer();
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
