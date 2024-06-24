//--------------------------------Function Call Signature--------------------------------------------------
/**
 * Function call signature refers to the declaration or definition of a function , which include the 
 * function name, parameter and return type.It defines the function structure and type information of a function 
 * without including the function's implementation and body .
 */

type Student  = {
     name:string,
     age:number,
     greet:(country:string) => string //function call signature ------------
}

let Student2:Student ={
    name:"Sachin Gupta",
    age:23,
    greet:(country) :string => ` Welcome , My name is ${Student2.name} and my country name is ${country}.`,
};

console.log(Student2.greet("India"));//


let Student3:Student ={
    name:"Raj Gupta",
    age:23,
    greet:(country) :string => ` Welcome , My name is ${Student3.name} and my country name is ${country}.`,
};

console.log(Student3.greet("America"));

//------------------------------------------------Practice------------------------------------------------

enum Roles{
    User="User",
    Admin="Admin",
}
type LoginDetails = {
    name?:string,
    email:string,
    password:string,
    role:Roles;
}

const user1:LoginDetails ={
    name:"Sachin",
    email:"Sachin@2001.gmail.com",
    password:"wert",
    role:Roles.Admin,
}

const user2:LoginDetails ={
    name:"Sachin",
    email:"Sachin@2001.gmail.com",
    password:"wert",
    role:Roles.User,
}
const isAdmin:(user:LoginDetails) => void = (user:LoginDetails):string =>{
    const {name,role} = user1;
    
    return role==="Admin" ? `${name} is allow to edit the website` : `${name} is not allow to edit the website.`;
}

console.log((isAdmin(user1)));
console.log((isAdmin(user2))); //conflict in this code-------------


//------------------------------------------Tuples--------------------------------------------------------
/**
 * Tuples in ts , are data structure that allows us to store FIXED-SIZE collection of values of different types.
 * They are similar to arrays but with a key differences : the types of elements in tuple are fixed and declared
 * at the time of creation ,whereas array can hold elements of the same type , and their size can vary.
 */


let tup:[number , string , boolean];
tup = [23,"Sachin Gupta",true];
console.log(tup);

//we can change the value as well---------------based on indexing.
tup[0]=22;
tup[1]="Raj Gupta";
console.log(tup);
//------------------------------------------------------------------------------------------------------------
type personaInfo = [string,number, boolean];

let person1:personaInfo = ["Sachin",23,true];
let person2:personaInfo = ["Raj",23,false];
let display:(per:any)=>void =(person:personaInfo):void =>{
    const [name,age,hasDrivinglicense] = person1;
    console.log(`Name ${name},Age ${age} and License ${hasDrivinglicense}`);
}

display(person1);
display(person2);
//----------------------------------readonly property---------------------------------------------------
//if we use readonly property , then after that we are not able to change the tuples again.

//For ex ----

type tuple = readonly[string,number,boolean];

let per1:tuple = ["Rishi",23,true];
console.log(per1);
//per1[0] = "Rishi bhopal";we are not able to update the property as well
//per1.push("Sachin");//we are not able to add new property , so we can not perform any operations.

//------------------------------------------best uses of readonly property--------------------------------
/**
 * Basically , when we know that , we needed only this data and that much amount of data then 
 * this property is very useful.and we dont want update the data and append new data in that tuple .
 * Same as for tuples -- when we need only specific particular data then we use tuples.
 */


//-------------------------------------------Task.1----------------------------------------------------------
/**
 * Tuples in Typescript
 * ! Question 1:
 * You are building a simple e-commerce application and need to store product information. 
 * Define a tuple type called ProductInfo to represent each product, containing the following elements:
  
Product name (string)
Price (number)
Quantity in stock (number)
Create two product instances using this tuple type and display their information.
 */
//Defining tuple here with the help of type alias -----
type productInfo = [string,number,number];

//Creating object ------
let person3:productInfo = ["Oppo A54",12000,1];
let person4:productInfo = ["Real me ",10000,2];

//Displaying the person3 details -----------------------------------
const display1:(per3:any)=>void =(person:productInfo) =>{
    const [proname,price,quan] = person3;   
    return `Product name is ${proname} & price is ${price} and product quantity is ${quan}.`;
} 
console.log(display1(person3));



//Displaying the person4 details -----------------------------------
const display2:(per2:any)=> void =(person:productInfo) =>{
    const [name,price,quantity] =person4;
    return `Product name is ${name} & price is ${price} and product quantity is ${quantity}.`;
}

console.log(display2(person4));

//-------------------------------------------Task.2-----------------------------------------------------------
/**
 * 
 * ! Question 2:
 * You are creating a student management system and want to keep track of student grades for different 
 * subjects. Define a tuple type called SubjectGrade to represent a subject and its corresponding grade, 
 * containing the following elements:

Subject name (string)
Grade (number)
Create an array of SubjectGrade tuples to store the grades for a student in three different subjects:
Math, English, and Science. Calculate and display the average grade for the student.

 */





//-------------------------------------------Task.3-------------------------------------------------------
/**
 * 
//! Question 3:
// You are working on a weather application, and you need to store weather data for different cities. 
Define a tuple type called WeatherData to represent the weather information, containing the following elements:

// City name (string)
// Temperature in Celsius (number)
// Weather condition (string)
// Create a function called displayWeather that takes an array of WeatherData tuples as input and displays 
//the weather information for each city in a user-friendly format.
 */
type WeatherData = [string,number,string];

let weatherDataArray:WeatherData[] =[
    ["Newyork",30,"sunny"],
    ["India",40,"sunny"],
    ["Newyork",10,"cloudy"],


];

function DisplayWheather(weahtherdata:WeatherData[]):void{
    for(let[city,Temperature,condition]of weahtherdata){
        console.log(`City: ${city}`);
        console.log(`Temperature: ${Temperature}°C`);
        console.log(`Condition: ${condition}`);
        console.log('--------------------------');
    }
}

DisplayWheather(weatherDataArray);
