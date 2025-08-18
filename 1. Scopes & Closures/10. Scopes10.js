var x = 10;//gs
function fun(){
    var x = 20;//fs
    console.log(x);//20
}
var x = 30;//gs, same x as in line number 1.
fun();
console.log(x);//30
