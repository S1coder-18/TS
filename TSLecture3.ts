//Function -- Function in ts is same as the js , where function start with the function name followed by 
//parenthesis having some name and may or may not have the parameter.

//Just in ts function we need to pass the return type if we want to return something ad as well as the
//type of the parameter.

function fun(name:string,age:number):void{
    console.log(`The name is ${name} and age is ${age}.`);
}

fun("Sachin",23);
//fun(23,"Sachin");// If we try to do this then it will give error because we can not pass the number as 
//value if there string is needed.



//Here , Arrow function is know as fat arrow function--------------------------------------------------

const greet = (Name:string,Age:number) =>
    {
        console.log(`Hello, good Morning ${Name} and age ${Age}.`);
    }

greet("Sachin Gupta",23);




//Also we can pass function parameter as optional for this we need to suffix the (?) in variable name

const greet1 = (Name:string,Age?:number) =>
    {
        console.log(`Hello, good Morning ${Name} and age ${Age}.`);
    }

greet1("Sachin Gupta");//Correct , we can pass as optional parameter and argument.

//Also , we can not pass the optional parameter before the required parameter other wise 
//it will generate errors. 


/*
const greet2 = (Name?:string,Age:number) => //Here , we are getting error in Age parameter .
    {
       console.log(`Hello, good Morning ${Name} and age ${Age}.`);
    }

greet2("Sachin Gupta",23);     */




//--------------------------------------Function return type----------------------------------------------
function Helloworld(hello:string):string // here we can return any of the type of ts.
{
    return hello;
}
console.log(Helloworld("Hello,World !"));

//------------------------------------------Type Inference----------------------------------------------
/* Typer inference - in ts refers to the ability of compiler to automatically determine and assign 
*types to variable ,expressions and function return  values based on their usage and context in the code.*/

let myVar = "Sachin"; //Automatically determine and assign the string here...
//myVar = 23; //Here , if we try to assign number to string type then it will give the error.

//Task 1. -------------------------------------------------------------------------------------------------
/*Declare the variable message and initialize it with the value "Hello,Type script".Infers the type 
*of message inference.*/
let message = "Hello , Type Script";
console.log(typeof message);

//-----------------------------------------Default Parameter--------------------------------------------
//Default parameter specified by providing a default value in the parameter declaration.

const Student = (name:string,age:number,Role="Software engineer"):string =>{
    return `The name is ${name} working as ${Role} at the age of ${age}.`;
}

console.log(Student("Sachin Gupta",23));
console.log(Student("Sachin Gupta",23,"Software engineer at Epam"));
//If we does not provide the argument then it print the default one , and we pass the argument then 
//it print the pass argument  .

//Its willn not give the error during the function creation time but 
const Student1 = (name:string,Role="Software engineer",age:number):string =>{
    return `The name is ${name} working as ${Role} at the age of ${age}.`;
}
//it will give the error during the function calling --------
// console.log(Student1("Sachin Gupta",23)); 
// console.log(Student1("Sachin Gupta",23,"Software engineer at Epam"));

//Task ---------------------------------------------------------------------------------------------
/*Create a function CalculateAverage and take array in parameter and return the array as well from that 
function */
const calculateAverage = (nums: number[] ): void=>{
    var sum:number = 0;
      for(let i=0; i < nums.length;i++){
        sum += nums[i];
      }
      console.log("The Average of numbers is ",sum/nums.length);
}
const number = [1,2,3,4,5];
calculateAverage(number);