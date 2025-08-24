
class Product {
    #name;
    #price;
    category;
    rating;

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
        console.log("Displaying cart items...", this.#name, this.price, this.category, this.rating);//if we try to access private variable without #, it'll return undefined, for ex: price.
    }
    buyProduct() {
        console.log("Buying product");
    }

}

let iPhone = new Product("iPhone 14", 999, "Electronics", 4.5);
console.log(iPhone);
iPhone.displayCartItems();
// console.log(iPhone.name);//undefined, because #name is a private field and cannot be accessed directly outside the class, for that we need to use getter methods.
// console.log(iPhone.rating);//4.5 bcz we can access public fields directly.

//but if we try to create a new data member 'name' inside the object, it will not affect the class's private field, in fact it will create a new data member inside the object along with private data members or public data members.
iPhone.name = "iPhone 15";
console.log(iPhone.name);//"iPhone 15"
// console.log(iPhone.#name);//undefined: SyntaxError: Private field '#name' must be declared in an enclosing class
  console.log(iPhone);




//next file: do we have only one way to initialize an object(putting values to our data members) using constructor? -> No, for that we use getter and setter methods.