//more code

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
//the 'value' will be the only one which was promise resolved or rejected value, nothing else. which means callbacks either in onFullfillment or onRejected array will receive the same value, which was passed to resolve or reject a promise.
promise.then(function f(value) { console.log("executing f", value) }, function g(value) { console.log("executing g", value) });promise.then(function i(value) { console.log("executing i", value) }, function j(value) { console.log("executing j", value) });

for (let index = 0; index < 1000000000; index++) { };
console.log("The End");


