//Objects -- Objects are used to represent the non primitive values and it is a data structure that is 
//used store the data in key-value pairs.

//In typescript , Objects are same as js there are lit bit difference that we will see below --

let stud:Object={
    name:"Sachin",
    age:23,
    Role:"Software engineer",
}
console.log(stud);// 
//But ,Here problem is that if we try to access the particular specific property then it will give error
//console.log(stud.name);//name doesnt exist object type .

//To overcome this , we follow the next process--------
let Stu :{
    name:String,
    age:number,
    Role:string,
} = {
    name:"Sachin Gupta",
    age:23,
    Role:"Software Engineer",
}
//Here , if we try to access then it will give correct output .--------------------------------------
console.log(Stu.name);//Sachin Gupta

//As well as , we can give the optional properties to the objects ---by appending (?) , at last,


let Stu1:{
    name:string,
    age:number,
    Role?:string,
}={
    name:"Sachin Gupta",
    age:23,
    //Role:"Software Engineer",
};

console.log(Stu1);//This will give the outout as --- { name: 'Sachin Gupta', age: 23 }.

//Nested object---------------------------------------------------------------------------

let Stu2:{
    name:string,
    age:number,
    Role:string,
    address:{
        city:string,
        State:string,
        PinCode:number,
    }

}={
    name:"Sachin Gupta",
    age:23,
    Role:"Software Engineer",
    address:{
        city:"jabalpur",
        State:"MadhyPradesh",
        PinCode:484555,
    }
};
console.log(Stu2.address.city);//jabalpur.
console.log(Stu2.address.PinCode);//484555.


//Also, we can update the data as well , but string to string and number to number ,if we try to update ,
//string to number or number to string and same as for other datatype , then it will give the error .

Stu2.name="Raj Gupta";
console.log(Stu2);
Stu2.address.city="Umaria";
console.log(Stu2);

//--------------------------------------------Task Time--------------------------------------------------
/*In this ,I want to give the random value for the price and for quantity as well !......................
And then return the quantity as the string value .
*/
let A:number = Math.floor(Math.random()*100)+1;//Random price.
let B:number = Math.floor(Math.random()*5)+1;//Random quantity.
let C:number = A*B;
let D:string = B+"kg";
let product1:{
    name:string,
    price:number,
    quantity:string,

}={
    name:"Sachin Gupta",
    price:C,
    quantity:D,
}

console.log(product1);//{ name: 'Sachin Gupta', price: 100, quantity: '2kg' }
console.log(product1.name);//Sachin Gupta
console.log(product1.price);//Random value , again and again .
console.log(product1.quantity);//Random kg as well each and every time .
