//Creating objects of a class: there is a keyword in JS called as 'new' which can help us to create an object out of a class.


class Product{

    name;
    price;
    category;
    rating;

    constructor(){
        console.log("Constructor called");
    }

    addToCart(){
        console.log("Added to the cart");
    }
    removeFromCart(){
        console.log("Removed from the cart");
    }
    displayCartItems(){
        console.log("Displaying cart items");
    }
    buyProduct(){
        console.log("Buying product");
    }

}
console.log("Testing 1");
let iPhone = new Product();
console.log("Testing 2");

console.log(iPhone);//Product { name: undefined, price: undefined, category: undefined, rating: undefined }
console.log(typeof iPhone);//object
console.log(iPhone.addToCart());



//next file -> IQ: how 'new' keyword works in JS?