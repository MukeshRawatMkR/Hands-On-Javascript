/**
 * Widely used JavaScript built-in functions/examples
 */

// String functions
console.log("hello".toUpperCase()); // HELLO
console.log("Hello World".toLowerCase()); // hello world
console.log("hello world".includes("world")); // true
console.log("hello world".replace("world", "JS")); // hello JS
console.log("hello world".split(" ")); // ["hello", "world"]
console.log("  trim  ".trim()); // "trim"

// Number functions
console.log(Number("123")); // 123
console.log(parseInt("42px")); // 42
console.log(parseFloat("3.14")); // 3.14
console.log((123.456).toFixed(2)); // "123.46"
console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.2)); // 5
console.log(Math.sqrt(16)); // 4
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.random()); // random number between 0 and 1

// Array functions
const arr = [1, 2, 3, 4, 5];
console.log(arr.push(6)); // 6 (new length)
console.log(arr.pop()); // 6
console.log(arr.shift()); // 1
console.log(arr.unshift(0)); // 5 (new length)
console.log(arr.concat([7, 8])); // [2,3,4,5,0,7,8]
console.log(arr.join("-")); // "2-3-4-5-0"
console.log(arr.slice(1, 3)); // [3,4]
console.log(arr.splice(2, 1)); // [4]
console.log(arr.indexOf(3)); // 1
console.log(arr.includes(5)); // true
console.log(arr.map(x => x * 2)); // [4,6,8,10,0]
console.log(arr.filter(x => x > 2)); // [3,5]
console.log(arr.reduce((a, b) => a + b, 0)); // sum
console.log(arr.find(x => x === 3)); // 3
console.log(arr.some(x => x > 4)); // true
console.log(arr.every(x => x < 10)); // true
console.log(arr.reverse()); // reversed array

// Object functions
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // ["a","b","c"]
console.log(Object.values(obj)); // [1,2,3]
console.log(Object.entries(obj)); // [["a",1],["b",2],["c",3]]
console.log(Object.assign({}, obj, { d: 4 })); // {a:1,b:2,c:3,d:4}
console.log(JSON.stringify(obj)); // '{"a":1,"b":2,"c":3}'
console.log(JSON.parse('{"a":1,"b":2}')); // {a:1,b:2}

// Date functions
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.toISOString());

// Utility functions
setTimeout(() => console.log("Timeout!"), 1000);
setInterval(() => console.log("Interval!"), 2000);
clearTimeout();
clearInterval();

// Function functions
function greet(name) { return `Hello, ${name}`; }
console.log(greet("JS"));
const arrow = x => x * 2;
console.log(arrow(5));

// Promise functions
const promise = Promise.resolve(42);
promise.then(val => console.log(val));
Promise.reject("error").catch(err => console.log(err));

// Console functions
console.log("Log");
console.error("Error");
console.warn("Warn");
console.info("Info");

// Global functions
console.log(isNaN("abc")); // true
console.log(isFinite(123)); // true
console.log(decodeURI("https://example.com/?q=hello%20world"));
console.log(encodeURI("https://example.com/?q=hello world"));
console.log(escape("hello world")); // deprecated
console.log(unescape("hello%20world")); // deprecated

// Others
console.log(Array.isArray([1,2,3])); // true
console.log(typeof "abc"); // string
console.log(typeof 123); // number
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof (() => {})); // function