//ToBoolean:

/*
(Falsy values):
- undefined
- null
- 0
- ""
- -0
- NaN
- false
*/
//they all return false, else return true.


let x = NaN;
console.log(!x); 
let y = 0;
console.log(!y); 
let z = 1;
console.log(!z); 

//Not operator internally uses ToBoolean.