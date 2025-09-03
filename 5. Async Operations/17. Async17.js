//more code

const p1 = new Promise((res, rej) => {
    console.log("1. executor callback triggerd by Promise constructor p1");//1
    setTimeout(() => {//RE
        console.log("3. Timer 1 Done, p1");//3
        res(100);
    }, 500);
});
p1.then(function a(){console.log("4. a")}, function b(){console.log("b")});//microtask queue, a: onFuillmentArray, b: onRejectedArray.//4

setTimeout(() => {//RE
    console.log("5. timer 1 Done");//six
}, 3000);


const promise = new Promise((res, rej) => {
    console.log("2. executor callback triggerd by Promise constructor");//2
    setTimeout(() => {//RE
        const randNo = Math.floor(Math.random() * 100);
        console.log("six.", randNo);//5
        if (randNo > 50) {
            res(randNo);
        }
        else {
            rej(randNo);
        }
    }, 4000);
});
promise.then(function f(value) { console.log("7. executing f", value) }, function g(value) { console.log("7. executing g", value) });//MQ, 4
promise.then(function i(value) { console.log("8. executing i", value) }, function j(value) { console.log("8. executing j", value) });//MQ, 4

for (let index = 0; index < 1000000000; index++) { };


