var x = 10;
console.log(x ** 2); //exponentiation operator

//logical operator (short circuiting): 
//use case in real world application -> conditional rendering in React, and authentication flows.
//AND -> if first value is falsy, then dont even try to evaluate second value and return first value.
//if first value is truthy, then return second value.
console.log(30 && 45);
console.log(30 && 0);
console.log(0 && 45);
console.log(undefined && 45);//undefined
console.log("" && 45);
console.log(null && 45);
console.log(NaN && 45);
console.log(0 && 0);//0, it's first argument, not second.
console.log(NaN && null);//NaN, it's falsy
console.log("" && -0);


//OR ->  if first value(arg) is false, return second value.
//if first value is truthy, then return first value.
console.log("testing OR Operator: ");
console.log(30 || 45);//30
console.log(30 || 0);//30
console.log(0 || 45);//45
console.log(undefined || 45);//45
console.log("" || 45);//45
console.log(null || 45);//45
console.log(NaN || 45);//45
console.log(0 || 0);//0 
console.log(NaN || null);//null
console.log("" || -0);//-0


//end of short circuiting.



//logical operators: strict equality operator(===) vs loose equality (==) AKA abstract equality operator.
console.log(0 === 0);//true
console.log(0 === "0");//false
console.log(0 == "0");//true, because of type coercion(loose equality)
console.log(0 === false);//false, because types are different
console.log(0 == false);//true
console.log(null == undefined);//true
console.log(null === undefined);//false
console.log(NaN === NaN);//false
console.log(NaN == NaN);//false

/*
Summary:
-> Loose equality (==) performs type coercion, while strict equality (===) does not.
*/

//End of logical operators.



// All bitwise operators:
console.log(5 & 3);  // Bitwise AND, output -> 1
console.log(5 | 3);  // Bitwise OR, output -> 7
console.log(5 ^ 3);  // Bitwise XOR, output -> 6
console.log(~5);     // Bitwise NOT, output -> -6
console.log(5 << 1); // Bitwise left shift, output -> 10
console.log(5 >> 1); // Bitwise right shift, output -> 2


//end of bitwise operators.