//HOF -> functions that take another function as an argument or return a function.
function f(fun){
    console.log('Hello ');
    console.log(fun);
    fun();
}

f(function fn(){//HOF
    console.log("World!");
})

//next file -> inbuilt HOF comes with arrays object.