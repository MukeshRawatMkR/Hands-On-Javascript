//Callback & HOF:
//HOF -> function that takes another function as an argument is known as HOF. e.g, map()
//callback -> function that is being passed into another function is known as callback.
/*
e.g,
const arr [1,2,3];
arr.map(function f(){});
map -> HOF
f -> callback
*/




//IQ: custom map implementation:
const arr =[1,2,3,10];
function customMap(arr, fn){//customMap is HOF
    let newArray =[];
    for(let i=0;i<arr.length;i++){
        newArray.push(fn(arr[i]));
    }
    return newArray;
};

console.log(customMap(arr,function fn(ele){//fn is callback
  return ele**2;
}));

//if callback is taking another callback function then technically it's a higher order function.


//next file: disadvantage of callbacks.