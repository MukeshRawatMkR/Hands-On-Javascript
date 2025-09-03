//Promise with setTimeout:

const firstPromise = new Promise(function executor(res, rej){
    console.log("Executor callback called by promise constructor.");
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 100);
        console.log(randomNumber);
        if(randomNumber < 50){
            rej();
        }else{
            res();
        }
    }, 5000);
});
console.log(firstPromise);


setTimeout(() => {
    console.log(firstPromise);
}, 10000);


//next file: Promise value.