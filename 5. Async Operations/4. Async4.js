//Code examples:

function createTimer(time, timerId){
    console.log(`creating a new timer with id ${timerId}`);
    setTimeout(() =>{
        console.log(`Timer with id ${timerId} has finished`);//how the fuck we can access the timerId here? even if createTimer() function is done and removed from the call stack? the answer is -> closure.
    },time);
    console.log(`successfully created a new timer with id ${timerId}`);
}

console.log("Starting with code");
createTimer(2000,1);
createTimer(0,2);
console.log("Starting a loop");
for(let i=0;i<1000000000;i++){}
console.log("loop is done");
console.log("last line of code done");

//output:
//starting with code
//creating a new timer with id 1
//successfully created a new timer with id 1
//creating a new timer with id 2
//successfully created a new timer with id 2
//starting a loop
//loop is done
//last line of code done
//timer with id 2 has finished
//timer with id 1 has finished



//next file: clooooooooooooooooooooooooooooooosureeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...