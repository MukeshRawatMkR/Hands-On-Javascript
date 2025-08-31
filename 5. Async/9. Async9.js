//res and rej in promise
const firstPromise = new Promise(function executor(res, rej){
    console.log("Executor callback called by promise constructor.");
    const randomNumber = Math.floor(Math.random() * 100);
    if(randomNumber < 70){
        rej("Promise rejected");
    }else{
        res("Promise resolved");
    }
});
console.log(firstPromise);

//next file: Promise with setTimeout.