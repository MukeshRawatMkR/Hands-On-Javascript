//Writing getter and setter methods to access private fields(data members).
//these getter and setter methods are also helpful in data validation, though we can apply on the constructor as well.

class Product {
    #name;
    #price;
    #category;
    #rating;


    //Note: we can't make constructor private, it's a reserved word in class only.
    constructor(name, price, category, rating) {
        this.#name = name;
        this.#price = price;
        this.#category = category;
        this.#rating = rating;
    }

    getName() {
        return this.#name;
    }

    getPrice() {
        return this.#price;
    }

    getCategory() {
        return this.#category;
    }

    getRating() {
        return this.#rating;
    }

    setName(name) {
        if(typeof name !== "string" || name.trim() === "") {
            console.log("Invalid name. Name must be a non-empty string.");
            return;
        }
        this.#name = name;
    }

    setPrice(price) {
        if(price<0) {
            console.log("Invalid price. Price cannot be negative.");
            return;
        }
        this.#price = price;
    }

    setCategory(category) {
        this.#category = category;
    }

    setRating(rating) {
        if(rating<0 || rating>5) {
            console.log("Invalid rating. Please enter a rating between 0 and 5.");
            return;
        }
        this.#rating = rating;
    }
}

let obj = new Product("iPhone 14", 999, "Electronics", 4.5);
// obj.rating = 4.8;//new  data member will be created in that obj along with private #rating.
// console.log(obj);

// console.log(obj.getRating());//to prove that we have two rating in obj object.


obj.setRating(5.7);
console.log(obj.getRating());

//problems with this class: the constructor is getting too many parameters, for that we have a design pattern called "Constructor Overloading" or "Builder Pattern" to solve this issue.