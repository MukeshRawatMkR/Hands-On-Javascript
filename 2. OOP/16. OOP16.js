//JS give us another way to get and set our fields, using get and set keywords.
//we can access them as property visually but internally they'll be calling the get and set function of thier corressponding functions. 
class Product {
    #name;
    #price;
    #category;
    #rating;


    constructor(name, price, category, rating) {
        this.#name = name;
        this.#price = price;
        this.#category = category;
        this.#rating = rating;
    }

    get name(){
        return this.#name;
    }
    get price(){
        return this.#price;
    }
    get category(){
        console.log("get category called...")
        return this.#category;
    }
    get rating(){
        return this.#rating;
    }

    set name(n){
        if(typeof n !== "string" || n.trim() === "") {
            console.log("Invalid name. Name must be a non-empty string.");
            return;
        }
        this.#name = n;
    }

    set price(p){
        if(p<0) {
            console.log("Invalid price. Price cannot be negative.");
            return;
        }
        this.#price = p;
    }

    set category(c){
        this.#category = c;
    }

    set rating(r){
        if(r<0 || r>5) {
            console.log("Invalid rating. Please enter a rating between 0 and 5.");
            return;
        }
        this.#rating = r;
    }

    set price(p){
        if(p<0) {
            console.log("Invalid price. Price cannot be negative.");
            return;
        }
        this.#price = p;
    }

    set category(c){
        console.log("setter of cateogry called...");
        if(typeof c !== "string" || c.trim() === "") {
            console.log("Invalid category. Category must be a non-empty string.");
            return;
        }
        this.#category = c;
    }

}

let obj = new Product("iPhone 14", 999, "Electronics", 4.5);
console.log(obj.category);//getter category: it's like accessing the data members but we actually accessing the 'get' function of category.
obj.category = "water";//setter category: it's like accessing the data members but we actually accessing the 'set' function of category.
console.log(obj.category);



//next file: class as wrapper on function.