//Disadvantage of callbacks:
//Disadvantage of callbacks:

//1. Callback Hell(minor problem: Readability problem): When you have multiple asynchronous operations that depend on each other, you end up with deeply nested callbacks, making the code hard to read and maintain.

setTimeout(function(){
    console.log("1");
    setTimeout(function(){
        console.log("2");
        setTimeout(function(){
            console.log("3");
        },1000);
    },1000);
},1000);

//2. Error Handling: Managing errors in callbacks can be challenging, as you need to handle errors in each callback separately.

function fetchData(callback){
    setTimeout(function(){
        const error = false;
        if(error){
            callback("Error fetching data");
        }else{
            callback(null, "Data fetched successfully");
        }
    },1000);
}

fetchData(function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

//3. Inversion of Control: When using callbacks, you lose control over the flow of your program, as you are at the mercy of the callback being called at the right time.
//example: bug in makePayment() function.

/*
or my def: we give our function as a callback to some HOF, and that HOF has control over when to call our function, so we lose control over when our function is executed, they might call it multiple times, or not at all or mess things up.
*/


//next file: uses of callbacks in async programming.
