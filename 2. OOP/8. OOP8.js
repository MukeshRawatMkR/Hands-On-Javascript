//example of 'this' keyword.
let obj = {//this
    firstName: "Mukesh",
    lastName: "Rawat",
    fun: function () {
        console.log(this.firstName + " " + this.lastName);
    }
};

obj.fun();//obj became call site as it is calling the fun() method, which has 'this' keyword referring to the obj.



//next code:
let obj2 = {//this
    firstName: "Mukesh",
    lastName: "Rawat",
    address: {
        firstName: "MukeshR",
        fun: function () {
            console.log(this.firstName + " " + this.lastName);
        }
    }
};

obj2.address.fun();//for this function the call site is 'address' not the 'obj2', so 'this' refers to address object.


//next file: but here is a catch with 'this' keyword with arrow functions.