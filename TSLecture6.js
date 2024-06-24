//--------------------------------Function Call Signature--------------------------------------------------
/**
 * Function call signature refers to the declaration or definition of a function , which include the
 * function name, parameter and return type.It defines the function structure and type information of a function
 * without including the function's implementation and body .
 */
var Student2 = {
    name: "Sachin Gupta",
    age: 23,
    greet: function (country) { return " Welcome , My name is ".concat(Student2.name, " and my country name is ").concat(country, "."); },
};
console.log(Student2.greet("India")); //
var Student3 = {
    name: "Raj Gupta",
    age: 23,
    greet: function (country) { return " Welcome , My name is ".concat(Student3.name, " and my country name is ").concat(country, "."); },
};
console.log(Student3.greet("America"));
//------------------------------------------------Practice------------------------------------------------
var Roles;
(function (Roles) {
    Roles["User"] = "User";
    Roles["Admin"] = "Admin";
})(Roles || (Roles = {}));
var user1 = {
    name: "Sachin",
    email: "Sachin@2001.gmail.com",
    password: "wert",
    role: Roles.Admin,
};
var user2 = {
    name: "Sachin",
    email: "Sachin@2001.gmail.com",
    password: "wert",
    role: Roles.User,
};
var isAdmin = function (user) {
    var name = user1.name, role = user1.role;
    return role === "Admin" ? "".concat(name, " is allow to edit the website") : "".concat(name, " is not allow to edit the website.");
};
console.log((isAdmin(user1)));
console.log((isAdmin(user2))); //conflict in this code-------------
//------------------------------------------Tuples--------------------------------------------------------
/**
 * Tuples in ts , are data structure that allows us to store FIXED-SIZE collection of values of different types.
 * They are similar to arrays but with a key differences : the types of elements in tuple are fixed and declared
 * at the time of creation ,whereas array can hold elements of the same type , and their size can vary.
 */
var tup;
tup = [23, "Sachin Gupta", true];
console.log(tup);
//we can change the value as well---------------based on indexing.
tup[0] = 22;
tup[1] = "Raj Gupta";
console.log(tup);
var person1 = ["Sachin", 23, true];
var person2 = ["Raj", 23, false];
var display = function (person) {
    var name = person1[0], age = person1[1], hasDrivinglicense = person1[2];
    console.log("Name ".concat(name, ",Age ").concat(age, " and License ").concat(hasDrivinglicense));
};
display(person1);
display(person2);
var per1 = ["Rishi", 23, true];
console.log(per1);
//Creating object ------
var person3 = ["Oppo A54", 12000, 1];
var person4 = ["Real me ", 10000, 2];
//Displaying the person3 details -----------------------------------
var display1 = function (person) {
    var proname = person3[0], price = person3[1], quan = person3[2];
    return "Product name is ".concat(proname, " & price is ").concat(price, " and product quantity is ").concat(quan, ".");
};
console.log(display1(person3));
//Displaying the person4 details -----------------------------------
var display2 = function (person) {
    var name = person4[0], price = person4[1], quantity = person4[2];
    return "Product name is ".concat(name, " & price is ").concat(price, " and product quantity is ").concat(quantity, ".");
};
console.log(display2(person4));
var weatherDataArray = [
    ["Newyork", 30, "sunny"],
    ["India", 40, "sunny"],
    ["Newyork", 10, "cloudy"],
];
function DisplayWheather(weahtherdata) {
    for (var _i = 0, weahtherdata_1 = weahtherdata; _i < weahtherdata_1.length; _i++) {
        var _a = weahtherdata_1[_i], city = _a[0], Temperature = _a[1], condition = _a[2];
        console.log("City: ".concat(city));
        console.log("Temperature: ".concat(Temperature, "\u00B0C"));
        console.log("Condition: ".concat(condition));
        console.log('--------------------------');
    }
}
DisplayWheather(weatherDataArray);
