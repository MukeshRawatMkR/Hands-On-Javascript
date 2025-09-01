//How promise are being consumed?



console.log("start");
setTimeout(() => {
    console.log("timer 1 Done");
}, 1000);


const promise = new Promise((res, rej) => {
    console.log("executor callback triggerd by Promise constructor");
    setTimeout(() => {
        const randNo = Math.floor(Math.random() * 100);
        console.log(randNo);
        if (randNo > 50) {
            res(randNo);
        }
        else {
            rej(randNo);
        }
    }, 2000);
});

//1st function goes into resolved(onFullfillment) array, and 2nd function goes into rejected array.
promise.then(function f() { console.log("executing f") }, function g() { console.log("executing g") });//if resolved, callbacks in onFullfillment array goes into microstask queue, if rejected callbacks in onRejected array goes into microtask queue.
promise.then(function i() { console.log("executing i") }, function j() { console.log("executing j") });

// for (let index = 0; index < 10000000000; index++) { };
for (let index = 0; index < 1000000000; index++) { };
console.log("The End");

//next file: more code.