function process(){
    let i = 0;
    function innerProcess(){
        i += 1;
        console.log("inside innerProcess: " + i);
        return i;
    }
    return innerProcess;//we are just returning the function, not calling it.
}

let result=process();//returns innerProcess function
console.log(result);
console.log(result());
console.log(result());
console.log(result());



//For more knowledge: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures