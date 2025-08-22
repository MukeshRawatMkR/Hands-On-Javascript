
class Product{

    name;//optional only if we write the constructor like at line number 9 and 11... 
    price;//optional
    category;//optional
    rating;//optional

    constructor(name, price, category, rating){
        console.log("Constructor called");
        this.name = name;// if this is how we assign values to the properties and also passes our parameters in the constructor, then we don't even need to write the data members explicitly in our class. like in line number 4 - 7.
        this.price = price;
        this.category = category;
        this.rating = rating;
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
let iPhone = new Product("iPhone 14", 109999, "Electronics", 4.5);
// console.log(new Product("iPhone 14", 109999, "Electronics", 4.5));//Product { name: 'iPhone 14', price: 109999, category: 'Electronics', rating: 4.5 }
// console.log(iPhone);//Product { name: 'iPhone 14', price: 109999, category: 'Electronics', rating: 4.5 }



//next file -> this keyword 