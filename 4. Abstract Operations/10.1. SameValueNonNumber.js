console.log(typeof null);//historically mistake.


let obj1={x:10};
let obj2={x:10};
let obj3={x:7};
console.log(obj1===obj2);//same object value -> false
console.log(obj1===obj3);//same object value -> false
console.log(obj1===obj1);//same object value -> true
console.log({x:7}==={x:7});//same object value -> false;
console.log({x:7}==={x:10});//same object value -> false.
 


//6 =+% `