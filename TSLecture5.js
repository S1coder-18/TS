//Objects -- Objects are used to represent the non primitive values and it is a data structure that is 
//used store the data in key-value pairs.
//In typescript , Objects are same as js there are lit bit difference that we will see below --
var stud = {
    name: "Sachin",
    age: 23,
    Role: "Software engineer",
};
console.log(stud); // 
//But ,Here problem is that if we try to access the particular specific property then it will give error
//console.log(stud.name);//name doesnt exist object type .
//To overcome this , we follow the next process--------
var Stu = {
    name: "Sachin Gupta",
    age: 23,
    Role: "Software Engineer",
};
//Here , if we try to access then it will give correct output .--------------------------------------
console.log(Stu.name); //Sachin Gupta
//As well as , we can give the optional properties to the objects ---by appending (?) , at last,
var Stu1 = {
    name: "Sachin Gupta",
    age: 23,
    //Role:"Software Engineer",
};
console.log(Stu1); //This will give the outout as --- { name: 'Sachin Gupta', age: 23 }.
//Nested object---------------------------------------------------------------------------
var Stu2 = {
    name: "Sachin Gupta",
    age: 23,
    Role: "Software Engineer",
    address: {
        city: "jabalpur",
        State: "MadhyPradesh",
        PinCode: 484555,
    }
};
console.log(Stu2.address.city); //jabalpur.
console.log(Stu2.address.PinCode); //484555.
//Also, we can update the data as well , but string to string and number to number ,if we try to update ,
//string to number or number to string and same as for other datatype , then it will give the error .
Stu2.name = "Raj Gupta";
console.log(Stu2);
Stu2.address.city = "Umaria";
console.log(Stu2);
//--------------------------------------------Task Time--------------------------------------------------
/*In this ,I want to give the random value for the price and for quantity as well !......................
And then return the quantity as the string value .
*/
var A = Math.floor(Math.random() * 100) + 1; //Random price.
var B = Math.floor(Math.random() * 5) + 1; //Random quantity.
var C = A * B;
var D = B + "kg";
var product1 = {
    name: "Sachin Gupta",
    price: C,
    quantity: D,
};
console.log(product1); //{ name: 'Sachin Gupta', price: 100, quantity: '2kg' }
console.log(product1.name); //Sachin Gupta
console.log(product1.price); //Random value , again and again .
console.log(product1.quantity); //Random kg as well each and every time .
var product2 = {
    name: "Sachin Gupta",
    age: 23,
    address: "Umaria",
};
console.log("The name is ".concat(product2.name, " and age is ").concat(product2.age));
console.log("Product 2 :--", product2);
var product3 = {
    name: "Rishi ",
    age: 23,
    address: "Bhopal"
};
console.log("The name is ".concat(product3.name, " and age is ").concat(product3.age));
console.log("Product 3 :--", product3);
//we can update the data in same way -------------------------------------------------------
product3.address = "Bhopal , AyodhyaByPass";
console.log(product3);
var productproduct = {
    ProductName: "OppoA54",
    Price: 100,
    quantity: 2,
};
console.log("Total price : --", (productproduct.Price * productproduct.quantity));
console.log(productproduct);
//Also we can pass the product as parameter and will get the result -----------------------------------
var CalculateAverage1 = (function (Cal) {
    return productproduct.Price * productproduct.quantity;
});
console.log("The Total Price is :", CalculateAverage1(productproduct));
