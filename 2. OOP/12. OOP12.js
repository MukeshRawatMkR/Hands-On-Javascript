//without constructor how can we create objects with different properties and assign the values to them? 
//just like we access the properties of an object, we can also assign values to them, and also add new properties like in line number 38.


class Product{

    name;
    price;
    category;
    rating;

    // constructor(){
    //     console.log("Constructor called");
    // }

    addToCart(){
        console.log("Added to the cart");
    }
    removeFromCart(){
        console.log("Removed from the cart");
    }
    displayCartItems(){
        console.log("Displaying cart items...");
    }
    buyProduct(){
        console.log("Buying product");
    }

}

let iPhone = new Product();
    console.log("before assigning the properties:")
    console.log(iPhone)
    iPhone.name = "iPhone 14";
    iPhone.price = 999;
    iPhone.category = "Electronics";
    iPhone.rating = 4.5;
    iPhone.manufacturerCompany = "Apple";


    console.log("after assigning the properties:")
    console.log(iPhone)

    iPhone.displayCartItems();


    
    //next file: problems in our class code.