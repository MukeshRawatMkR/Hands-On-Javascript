//6 =+% `
let obj={
    toString(){
        // by default gives[object Object]
        return '10';
    }
    valueOf(){
        //by default it returns the same object
        return "hi";
    }
}; 

let objt ={};
console.log(typeof objt.valueOf());
console.log(typeof objt.toString());

/*
JS uses an internal algorithm called ToPrimitive with a "hint":
Hint                                            Tries first             Falls back to"
number" (math, <, >, Number())                  valueOf               toString"   
string" (template literals, String())           toString                valueOf"
default" (+, ==)                                valueOf                 toString
So + and loose comparisons use valueOf first, but template literals use toString first.
*/