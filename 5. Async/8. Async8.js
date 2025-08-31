//Promise:
//1. How to create a promise:
//In JS we have a promise constructor.

const firstPromise = new Promise((res, rej)=>{
    console.log("Executor callback called by promise constructor.");
    // for(let i=0;i<11000000000;i++){};
});
console.log(firstPromise);


//next file: Promise states.