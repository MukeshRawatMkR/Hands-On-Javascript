//IQ: wanna use recursion using an anonymous function: we use a deprecated function called as (arguments.callee) which can be used to apply recursion.

//code:
let arr = [1, 2, 3, 4, 5];
let result = arr.map(function (n){
if(n == 1)return 1;
return n*arguments.callee(n - 1);// this is a deprecated(function) way to use recursion, not recommended.
});
console.log(result);


/*
Another official way to use:

function customMap(array, callback) {
  const result = [];
  (function mapRecursively(index) {
    if (index >= array.length) return;
    result.push(callback(array[index]));
    mapRecursively(index + 1);
  })(0);
  return result;
}
*/