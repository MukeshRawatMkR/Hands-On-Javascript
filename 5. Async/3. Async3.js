//async programming with callbacks.

setTimeout(function cb(){//setTimeout is higher order function, anonymous function is callback.
    console.log("Hello");
}, 3000);
console.log("end");
//settimeout is provided by the runtime environment (browser or node.js), native JS doesn't have setTimeout or other async functions.


//fun fact: setTimeout is not guaranteed to execute after the specified time, it only guarantees that it will not execute before that time.
// and console.log() is also not a native JS function, it's provided by the runtime environment.


//event loop is a part of runtime as well.
//When you call setTimeout, fetch, addEventListener, etc., the JS engine delegates them to the Web APIs layer provided by the browser (not the JS engine itself).
