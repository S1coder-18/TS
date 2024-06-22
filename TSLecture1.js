/*Configuration of ts -- 1. Node.js
                         2. command -- npm install -g typescript (install -g -- globally)
                         3. To run --  "tsc filename".*/
/*Typescript - is a development tool and it is superset of js. It is a object oriented and static typed
*language. It does not directly run or excute in the browser to run or excute first it needs to be
*converted into js , basically it is a compile time language .And it can be used in any enviornment where
* js can be run or excute.
* *******  To compile ts , there is command ----- "tsc filename"------.
*
* Why ts is needed ? --- (..Important question..)
*
* Currently ts is preferred over js because js is dynalmmically typed language and because of that
* there are lots of disadvantge of using js , if we declare the variable and initialize to number and
* after that if we again initialize same variable with the string then it will store string  , it does not
* give error , where as ts give error ...
* For ex -- we create a function sum in that passing two parameter a and b , when we pass number then it
* give correct output but , if we pass the string and number then it does the concatenation and thats a
* problem , here we want sum but it does concatenate . Here , ts comes in the picture.
// */
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(2,3)); // this gives 5 .
// console.log(sum("sachin",2)); //but this give the sachin2 . this is wrong we want to add here .
//Same example in ts -----------------------------------------------------------------------------
function sum1(a, b) {
    return a + b;
}
console.log(sum1(5, 5)); //this is correct .
//console.log(sum1("sachin",5)); // we can see ts is smart language it can detect easily .
/* Features of TS ----
* 1. Code readablility .
* 2. Code Maintainbility.
* 3. Statically types language.
* 4. Provide new features  like -- interface , Type annotations and Type inference and many more.
*/
//Can you tell me about this , why this not giving the error .
var NanValue = NaN;
console.log(NanValue);
//console.log(NaN==number); Here both condition is giving false you know why because the number referred to
//console.log(NaN===number); type not as the value , but here we are using as value.
//let Nanvalue:NaN = number; This is same as previous one here we are referring the number as the value.
//Ok , let me tell you , because the "Nan" in ts and js is the type of the number ,Because of that it is 
// not giving any of the errors.It is used to indicate that the given value is not the valid number , 
//Usually as the result of the invalid operations.
//Tasks 1. ---------------------------------------------------------------------------------------
/* Declare the variable using the name of the longtext and  extract the first 10 characters and store
*them into the shorttext variable .*/
var longtext = "Usually as the result of the invalid operations";
var shorttext = longtext.slice(0, 10);
console.log(shorttext);
//Task 2.-----------------------------------------------------------------------------------------
/* Decalre the variable str1 and str2 and compare them and store the result in the form of
*(true & false) and return the result */
var str1 = "I am the one";
var str2 = "I am the one";
var str3 = (str1 == str2);
console.log(str3);
//Task 3.--------------------------------------------------------------------------------------------
/* Declare two vriable product and price , respectively the type is the string and number and return the
*result in the form of string literals , The product {product} and is priced {price} at dollers .*/
var product = "Oppo A-54";
var price = 12540;
var strliterals = "The product is ".concat(product, " and is priced ").concat(price, " at dollers .");
console.log(strliterals);
