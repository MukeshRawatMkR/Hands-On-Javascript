//closures: is a mechanism using which a function remembers(only which are being used in the inner function) the variables present in the outer function even when the outer function execution is completed.


function fun(c,d){
    let m = 10;
    function gun(){
        let x = 99;
        console.log(m + c);//how the fuck we can access m and c here? even if fun() function is done and removed from the call stack? the answer is -> closure.
    }
    return gun;
};


let g = fun(5,6);
g();
// console.dir(g());


//Queues in JS & Node: https://chatgpt.com/c/68b1a4e6-1c78-8326-b789-39fba874297f


//next file: Promises