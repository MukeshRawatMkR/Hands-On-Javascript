//IQ: onFulfilled & onRejected arrays in Promise.

/*

In JavaScript Promises, onFulfillment and onRejection are not directly exposed as arrays that can be manipulated by developers. Instead, they represent internal mechanisms within the Promise object that manage the callback functions associated with the promise's resolution or rejection.
Internal Mechanism:

    onFulfillment:
    This refers to an internal list or queue within a Promise object where functions provided as the onFulfilled callback to .then() are stored. When a Promise transitions to the fulfilled state (meaning the asynchronous operation completed successfully), the JavaScript engine iterates through this internal list and executes each of the stored onFulfilled functions, passing the promise's resolved value as an argument.

    onRejection:
    Similarly, this refers to an internal list or queue where functions provided as the onRejected callback to .then() or to .catch() are stored. When a Promise transitions to the rejected state (meaning the asynchronous operation failed), the JavaScript engine iterates through this internal list and executes each of the stored onRejected functions, passing the promise's rejection reason (error) as an argument.

How to interact with them:
Developers interact with these internal mechanisms indirectly through the .then() and .catch() methods:

    .then(onFulfilled, onRejected):
    The onFulfilled function provided as the first argument to .then() is internally added to the promise's onFulfillment list. The onRejected function (if provided as the second argument) is added to the promise's onRejection list.
 
    .catch(onRejected):
    This is a shorthand for .then(null, onRejected), and the onRejected function provided is internally added to the promise's onRejection list. 

In essence, while you cannot directly access or modify onFulfillment and onRejection as arrays, they are fundamental internal components that enable the asynchronous execution and error handling capabilities of JavaScript Promises.

*/

//next file: code of these internal mechanisms.