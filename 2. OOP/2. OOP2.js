//making class from scratch.

class Product{

    name;//data member, here also we don't use the variable keyword, otherwise it will throw an error.
    price;//data member
    category;//data member
    rating;//data member

    addToCart(){//we don't have to write the function keyword explicitly in class, if we try to write function keyword it will throw an error.
        console.log("Added to the cart");
    }
    removeFromCart(){//member function
        console.log("Removed from the cart");
    }
    displayCartItems(){//member function
        console.log("Displaying cart items");
    }
    buyProduct(){//member function
        console.log("Buying product");
    }

}

//next file-> introducing constructor in classes