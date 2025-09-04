function process() {
    let i = 0;
    let j = [1, 2, 3];
    let k = 10;//will not be remembered in closure, cuz this one is not being used in innerProcess function.
    function innerProcess() {
        i += 1;//remembered in closure
        console.log(j);//same
        return i;
    }
    return innerProcess;
}

let result = process();
console.log(result);
// console.log(result());
// console.log(result());


//next files: output based questions.