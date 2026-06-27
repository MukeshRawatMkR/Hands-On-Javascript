//6 =+% `
let obj = {};

console.log(7 - obj);//-obj.valueof -> object, toString -> [object Object] -> 10-NaN -> NaN.(as per algos)!

//subtract algo, toNumber algo, and toPrimitive algo.


let obj1 = {
    a: 21,
    b: 10
};
console.log(10 - obj1); //doesn't matter, it relies on 'valueOf' and 'toString'.


//but in this case:
//case 1: 
let obj2 = {
    a: 21,
    valueOf() {
        return 10;
    }
};
console.log(100 - obj2);//valueOf

//case 2: 
let obj3 = {
    a: 21,
    toString() {
        return '20';
    }
};
console.log(100 - obj3);//toString

//case 3:
let obj4 = {
    a: 21,
    toString() {
        return {};
    }
};
console.log(100 - obj4);//type error.
