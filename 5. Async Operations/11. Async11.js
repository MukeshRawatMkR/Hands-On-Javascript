//Promise value

//initially promise value is undefined.
//using res, rej we have the power to change the initial value of promise to anything we like.

//res -> state: pending to fulfilled, value: undefined to anything we like.
//rej -> state: pending to rejected, value: undefined to anything we like.


const firstPromise = new Promise(function executor(res, rej){
    console.log("Executor callback called by promise constructor.");
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 100);
        console.log(randomNumber);
        if(randomNumber < 50){
            rej(randomNumber);
        }else{
            res(randomNumber);
        }
    }, 5000);
});
console.log(firstPromise);


setTimeout(() => {
    console.log(firstPromise);
}, 10000);


//next file: Two more properties along with values & state, which are onFulfilled & onRejected arrays.