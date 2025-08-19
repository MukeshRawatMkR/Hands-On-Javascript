//IIFE (Immediately Invoked Function Expression)
(function() {
    var a = 10;
  const message = "Hello, World!";
  console.log(message, a);
})();//last () are for invoking the function immediately, means it runs as soon as it's defined.
// console.log(a);//reference error




//another example with arguments
(function iife(i){
    console.log("calling IIFE with an argument:",     i);
})(25);




//with return
let res = (function iife(i){
    console.log("calling IIFE with an argument:",     i);
    return i * 2;
})(25);
console.log(res);
// res();//error


/*
but but but, why do we even use it:
1. To execute code immediately without leaving any traces or I should say we can't reference them later by calling. line number 26.
bcz IIFE gets wiped off from the memory, once the execution is done.
2. To encapsulate variables and functions, providing privacy.
3. To create a new scope and avoid polluting the global namespace(scope).
*/

