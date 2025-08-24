// problems in our class code: it violates the principles of encapsulation and data hiding.

class Product {
    // name;//bad practice
    // price;//bad practice
    // category;//bad practice
    // rating;//bad practice

    //then what's the solution?
    #name;//by adding a # before the variable name, we make it private, and to access it, we need to use getter and setter methods.
    #price;//good practice
    category;//good practice
    rating;//good practice

    //just like we made private variables, we can also make methods private by adding a # before the method name.

    //Note: a class can only have one constructor, otherwise syntax error will occur.
    constructor(name, price, category, rating) {
        this.#name = name;
        this.#price = price;
        this.category = category;
        this.rating = rating;
    }

    addToCart() {
        console.log("Added to the cart");
    }
    removeFromCart() {
        console.log("Removed from the cart");
    }
    displayCartItems() {
        console.log("Displaying cart items...", this.#name, this.#price, this.category, this.rating);
    }
    buyProduct() {
        console.log("Buying product");
    }

}

let iPhone = new Product("iPhone 14", 999, "Electronics", 4.5);
console.log(iPhone.name); //undefined, bcz #name is a private field and cannot be accessed directly outside the class, for that we need to use getter methods.

//the variables in class are now private and can only be accessed through getter and setter methods, but when i update the private variable itself using #name, it works, why? it should not happen. due to browsers compatibility issues.
// iPhone.#name = "iPhone 17";// in vs code it's giving SyntaxError: Private field '#name' must be declared in an enclosing class, but in browser it's not giving any error. again WTF? again browser compatibility issues.


//even if we write without the # prefix, it creates a new key in the current object with the same name. WTF? ->TBD






//next file: pdf of this concept.