//Introducing constructor in classes
//A very special member function of a class that is automatically called when an object is created.
//every class we make in JS has a constructor by default, which is called the default constructor.
//we can change(override) the implemenataion of the default constructor by writing one of our own by using 'constructor' keyword.
//We can also create our own constructor in a class.

// so whenever we create an object using classes, the constructor is first method that is automatically called by JS.


class Product{

    name;//data member, here also we don't use the variable keyword, otherwise it will throw an error.
    price;//data member
    category;//data member
    rating;//data member

    constructor(){//here we are creating a constructor using the 'constructor' keyword.
        console.log("Constructor called");
    }

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


//H/w-> is constructor a keyword(reserved word) in JS?
let constructor = "constructor";//here i'm able to name a variable name as constructor, which means it's not a reserved word.
console.log(constructor);


//next file -> creating objects of a class