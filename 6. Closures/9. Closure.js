function mystery() {
  let secret = "hidden";
  return function() {
    return function() {
      return secret;
    };
  };
}

const fn1 = mystery();//returns a function
const fn2 = fn1();//returns a function
console.log(fn2());//hidden
