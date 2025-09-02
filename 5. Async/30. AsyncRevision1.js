//  Revision/Output Based Questions/Twisted Problem


//todo: just we do in prmoise, we can chain our functions in onfullfillment and onrejected arrays by using .then(), how can we implement same functionality using callback.
setTimeout(function cb(i) {
    console.log("first call back\n", i);
    // return 300;
},2000,
   function cb2(value) {
        console.log("second call back", value);
    }, 2000);





    //Edge case: what if i write two resolve or reject in my promise?  -> the code will not throw any error but it'll accept only 1st one either resolve or reject function.

 
    //Edge case: can we execute our code after calling a resolve or reject function? -> yes we can.


    //Edge case: If we pass multiple args in my resolve function, will it take all or nothing or just first one -> First argument.


    //Edge case: what if pass return instead of resolve or reject functions in our promise? -> it'll be forever in pending state though it'll get out of the function, and that's why we always use resolve or reject function to change our promise state.


    //Todo: setTimout behaves differently in runtime to runtime.
        //in node -> returns object.
        //in browser -> timer id.

    
    //Edge case: .then() function only registers(not execute) the call back functions into onfullfiillment or onrejected array, and the CB functions only execute once the pomise state is changed, either fullfiled or rejected.


    //Edge case: what if we pass only one call back function in our promiseObject.then(), then it'd register that function in 'onFullfillment' array. 


    //Edge case: 
