function tricky() {
  let x = 100;
  return {
    inc: function() { x++; return x; },
    dec: function() { x--; return x; }
  };
}

const t = tricky();
// console.log(t);
console.log(t.inc());//101.
console.log(t.dec());//100
console.log(t.inc());//101
