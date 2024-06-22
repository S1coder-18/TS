//Function -- Function in ts is same as the js , where function start with the function name followed by 
//parenthesis having some name and may or may not have the parameter.
//Just in ts function we need to pass the return type if we want to return something ad as well as the
//type of the parameter.
function fun(name, age) {
    console.log("The name is ".concat(name, " and age is ").concat(age, "."));
}
fun("Sachin", 23);
//fun(23,"Sachin");// If we try to do this then it will give error because we can not pass the number as 
//value if there string is needed.
//Here , Arrow function is know as fat arrow function--------------------------------------------------
var greet = function (Name, Age) {
    console.log("Hello, good Morning ".concat(Name, " and age ").concat(Age, "."));
};
greet("Sachin Gupta", 23);
//Also we can pass function parameter as optional for this we need to suffix the (?) in variable name
var greet1 = function (Name, Age) {
    console.log("Hello, good Morning ".concat(Name, " and age ").concat(Age, "."));
};
greet1("Sachin Gupta"); //Correct , we can pass as optional parameter and argument.
//Also , we can not pass the optional parameter before the required parameter other wise 
//it will generate errors. 
/*
const greet2 = (Name?:string,Age:number) => //Here , we are getting error in Age parameter .
    {
       console.log(`Hello, good Morning ${Name} and age ${Age}.`);
    }

greet2("Sachin Gupta",23);     */ 
