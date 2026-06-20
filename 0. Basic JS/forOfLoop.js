/*
for...of → works on iterables (arrays, strings, maps, sets).
but To print objects with for...of, use Object.keys(), Object.values(), or Object.entries().
- Supports break, continue, and return — unlike forEach.
-Safe for sparse arrays — skips empty slots.


for...in → works on object keys.

*/
 
let arr = [1,2,3];
for (const element of arr) {
    console.log(element);
}

//ex: sparse array
const arrr = [1, , 3];
for (const val of arrr) console.log(val); // 1, 3


let obj={
    firstName:"Mukesh",
    lastName:"Rawat",
    age:25
};

/*
for...of loops over the values of any iterable (arrays, strings, Maps, Sets), and is cleaner than for...in (which gives keys, mainly for plain objects). For arrays you get items directly, for strings you get characters, for Maps you get [key, value] pairs, and .entries() or Object.entries() let you get indices/keys alongside values when needed. Plain objects aren't iterable on their own, so Object.entries() is the bridge.
*/