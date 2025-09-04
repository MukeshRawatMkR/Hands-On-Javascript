function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const c1 = counter();
console.log(c1());//1
console.log(c1());//2
