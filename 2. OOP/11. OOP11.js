//just revisiting the concept of 'this' in JavaScript, especially in the context of arrow functions and regular functions.

const obj = {
    x: 10,
    y: 20,
    f: () => {
        console.log(this, this.x , this.y);//this refers to the global object(window), and x and y are undefined.
    }
};
obj.f();