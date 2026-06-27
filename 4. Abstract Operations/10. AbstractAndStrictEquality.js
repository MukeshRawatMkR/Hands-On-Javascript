//Fact: Both equality check the type.
//abstract does coercion.


console.log(null == undefined);// or vice versa

console.log(10 == '10'); // type coercioun toNumber(y), or vice-versa.

console.log(true==10);//boolean to toNumber conversion happens.
console.log(true==1);
console.log(false=='0');//0 == 0.
console.log('0'==false);//0 == 0.


//Note:  if x: is number, string, and symbol and y: object, we convert y to toPrimitve & compare again. or vice-versa.


//otherwise return false:
console.log(null==false);// null == 0 -> false. 

console.log("NaN"== NaN);


let obj={x:10, valueOf(){return 100;}}
console.log(98 == obj);
console.log(100 == obj);//'valueOf', default is "number".



//Now Strict quality operator.
console.log("--------------------------------");
//if any of the type is different, return false.
    //if any of the value is NaN return false.
    console.log(NaN===NaN);//FACT 
    
console.log(0===-0);
console.log(-0===0);

//return false (for only numbers).