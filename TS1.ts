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

function sum1(a:number,b:number):number{
    return a+b;
}
console.log(sum1(5,5)); //this is correct .
//console.log(sum1("sachin",5)); // we can see ts is smart language it can detect easily .


/* Features of TS ----
* 1. Code readablility .
* 2. Code Maintainbility.
* 3. Statically types language.
* 4. Provide new features  like -- interface , Type annotations and Type inference and many more.
*/
