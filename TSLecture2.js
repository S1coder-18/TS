/*In this lecture we will learn about the boolean and the BigInt ...--------
/*Boolean -- is basically in typescript is used represent the either true or false value .
For example ----*/
var istrue = true;
console.log(istrue);
var isfalse = false;
console.log(isfalse);
//Task1.-----------------------------------------------------------------------------------------
/*Decalre a function named isEven and take parameter as number and  return the boolean type(true or false)
* if the given argument is even or odd .*/
function isEven(a) {
    if (a % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
//function call -----
console.log(isEven(12)); //true
console.log(isEven(15)); //false
//Task 2.------------------------------------------------------------------------------------------
function isDivisibleBy4and8(b) {
    if ((b % 4 == 0) && (b % 8 == 0)) {
        return true;
    }
    else {
        return false;
    }
}
//function call---------
console.log(isDivisibleBy4and8(12)); //false---
console.log(isDivisibleBy4and8(16)); //true---
//-------------------------------BigInt---------------------------------------------------------
/*Bigint -- in js or ts is used when the range is too big that are not able to handle or supported by
*the number then BigInt comes in to the picture . BigInt literals are written by appending the n suffix
*to an integral literal */
//In js we can't read the number above than 2 raise o the power of 53.
//let bignumber:bigint = 91234567890n;
//-----------------------------------ANy type--------------------------------------------------
/*any type -- Basically ,the any type is the most flexible type in ts. It essentially turns of all the
*checking for variables or expressions it is applied to.
*UseCases -- Working with dynamic data , like we want dynamic user input,newtwoek responses then any type can be useful*/
var myvar = 12;
console.log(myvar);
myvar = "Sachin Gupta";
console.log(myvar); // No , we can see here , it is not giving errors , any type stops the type checking.
myvar.map(function () {
    console.log("Sachin Gupta");
}); //It will give error but at compile time it does not giving any error.
//----------------------------------Unknown type--------------------------------------------
/*Unknown type is safer alternative to any type because it still enforces the type checking and type safety.
*Variable of type unknown can hold the any type of value , but we must perform the typechecking or
*type assertions  before using them in specific ways.*/
var un = "Sachin";
un = 23; //we can do this things same as any type but it performs the type checking ..
//For example --- If we try to do this then it is showing wrong here because of type cheching.
// un.map(() = >{
//     console.log(:"Sachin Gupta");
// })
/*Same thing we can do with the type any but we cant do with the type unknown , and also this is the difference/
*SO any type does not genrate the errors during the compile time but in the case of unknown type it will
*genrate the error.*/ 
