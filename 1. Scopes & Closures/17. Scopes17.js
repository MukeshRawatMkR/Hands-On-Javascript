//note: named function, when we have reuse the function in our codebase or in recursion.
//and anonymous function, when we need to execute the function only once in our codebase and can't use recursion here using an anonymous function.



//map
const arr = [1, 2, 3, 4, 5];
arr.map(function f(num) {
  console.log(num);
  return num;
});


//ex:
const arr1 = arr.map(function f(num) {
 return num*3;
});
console.log(arr1);//new array with elements multiplied by 3.

console.log(arr);//map does not change the original array, it returns a new array instead.



//IQ: To write our own custom map function
function customMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}
const customArr = customMap([10,20,30,4], function(num) {
  return num * 10;
});
console.log(customArr);//returns new array (not the array we passed as an argument) with elements multiplied by 10.

//wanna use recursion using an anonymous function-> go to next file
