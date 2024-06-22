//Arrays-- Basically the typescript in ts is same as the js , where we can store the multiple values but
//different types of element and arrays can be of specific types , ensuring the type safety throughout our code.
//We can define arrays in three ways in ts-----
// 1. Using square brackets -
var numbers = [1, 2, 3, 4, 5];
// 2.Using the Array constructor -
var arr = new Array(1, 2, 3, 4, 5);
// 3.Using the Array.of method --
//const names = Array.of("Raj","Rishi","Ragni","Sachin");
//In ts , all the js method will work ---
var x = arr.push(6);
console.log(x); //6
console.log("Array", arr);
//if we append the new value to the array using push method and storing in the variable
// and printing then it will return the ... length of that array .
var xx = arr.unshift(7); //7
console.log(xx); //7, same here as well 
console.log("Arrays", arr);
var t = arr.pop();
console.log(t); //it returns the poped element.
