//Heart of JavaScript.

/**
 * 1. Function Declaration
 * Most common way to define a function. Hoisted to the top of their scope.
 * Used for reusable logic, utility functions, etc.
 */
function add(a, b) {
    return a + b;
}

/**
 * 2. Function Expression
 * Functions assigned to variables. Not hoisted.
 * Useful for passing as arguments, closures, etc.
 */
const multiply = function(a, b) {
    return a * b;
};

/**
 * 3. Arrow Function
 * Shorter syntax, does not have its own 'this'.
 * Commonly used in callbacks, array methods, and concise code.
 */
const divide = (a, b) => a / b;

/**
 * 4. Anonymous Function
 * Function without a name, often used as callbacks.
 * Used in event handlers, array methods, etc.
 */
setTimeout(function() {
    console.log('Executed after 1 second');
}, 1000);

/**
 * 5. Named Function Expression
 * Function expression with a name, useful for recursion.
 */
const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
};

/**
 * 6. Immediately Invoked Function Expression (IIFE)
 * Runs as soon as it is defined. Used for creating isolated scopes.
 */
(function() {
    console.log('IIFE executed');
})();

/**
 * 7. Generator Function
 * Can pause and resume execution using 'yield'.
 * Used for lazy evaluation, iterators, async programming.
 */
function* idGenerator() {
    let id = 0;
    while (true) {
        yield id++;
    }
}
const gen = idGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1

/**
 * 8. Async Function
 * Returns a promise, allows use of 'await'.
 * Used for asynchronous code, API calls, etc.
 */
async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    return data;
}

/**
 * 9. Constructor Function
 * Used to create objects, before ES6 classes.
 */
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const john = new Person('John', 30);

/**
 * 10. Class Method (ES6)
 * Functions defined inside classes.
 * Used for object-oriented programming.
 */
class Animal {
    speak() {
        console.log('Animal speaks');
    }
}
const dog = new Animal();
dog.speak();

/**
 * 11. Callback Function
 * Function passed as an argument to another function.
 * Used in event handling, async operations, array methods.
 */
function processUserInput(callback) {
    const name = 'Alice';
    callback(name);
}
processUserInput(function(name) {
    console.log('Hello ' + name);
});

/**
 * 12. Higher-Order Function
 * Function that takes another function as argument or returns a function.
 * Used for functional programming, composition, etc.
 */
function makeMultiplier(factor) {
    return function(x) {
        return x * factor;
    };
}
const double = makeMultiplier(2);
console.log(double(5)); // 10

/**
 * 13. Recursive Function
 * Function that calls itself.
 * Used for problems like factorial, tree traversal, etc.
 */
function sum(n) {
    if (n <= 0) return 0;
    return n + sum(n - 1);
}
console.log(sum(5)); // 15

/**
 * 14. Closure
 * Function that remembers its lexical scope.
 * Used for data privacy, factory functions, etc.
 */
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2

/**
 * 15. Rest Parameters Function
 * Accepts variable number of arguments.
 * Used for flexible APIs, utility functions.
 */
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

/**
 * 16. Default Parameters Function
 * Parameters with default values.
 * Used for optional arguments.
 */
function greet(name = 'Guest') {
    console.log('Hello, ' + name);
}
greet(); // Hello, Guest

/**
 * 17. Method Shorthand (Object Literal)
 * Short syntax for defining methods in objects.
 */
const calculator = {
    add(a, b) {
        return a + b;
    }
};
console.log(calculator.add(2, 3)); // 5

/**
 * 18. Function Constructor (rarely used)
 * Creates functions dynamically.
 * Used for dynamic code generation (not recommended).
 */
const sumFn = new Function('a', 'b', 'return a + b');
console.log(sumFn(2, 3)); // 5

