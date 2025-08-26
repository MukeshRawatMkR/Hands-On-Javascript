//class as wrapper on function: cuz earlier there wasn't any concept of class in JS, we were doing it all with the help of functions. let's see how:



//IQ: function constructor: to implement class like feature without actually using the class feature.
function Person(n, a, j){
    this.name=n; 
    this.age=a;
    this.job=j;
// return{};
// return "Mukesh";
}
let person1=new Person("Mukesh Rawat", 25, "Software Engineer");
console.log(person1);

//the concept of 'this' and 'new'(like all those 4 steps) applies here, we can see at line number 10 and 11. 


//next code:
function Person1(n, a, j){
    this.name=n;//data member 
    this.age=a;
    this.job=j;
    this.aboutPerson=function(){//member function
        console.log(this.name, this.age, this.job);
    }


};
let person2=new Person1("MuRat", 25, "GenAI Developer");
console.log(person2.aboutPerson());
let person3=new Person1("MuRatt", 245, "GeanAI Developer");
console.log(person3.aboutPerson());




//next file: static keyword.