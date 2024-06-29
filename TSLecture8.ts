//------------------------------------------Modules---------------------------------------------------
/**
 * Basically in Ts, Modules are a way to organize the code into separate files or logical units . 
 * They provide mechanism for encapsulating code , managing dependecies & improving code manipulating 
 * & reusability .
 * 
 * There are two types of modules --
 * 1.Internal modules 
 * 2.External modules
 * 
 */
//1.Internal modules - are used to organize the code within the file and also refeerred to as "namespaces" keyword.
//They are defined using the "namespace keyword".

namespace mynamespace{
    export interface person{
        name:string,
        age:number,
    }

    export function greet(person1:person){
        return `Hello,My name is ${person1.name} and age is ${person1.age}.`;
    } 
}

let person5:mynamespace.person = {name:"SRaj gupta",age:23};
console.log(mynamespace.greet(person5));

//------------------------------------External module---------------------------------------------------
/**
 * Basically , the external module in ts based on the Ecamscript module system.They allow us to 
 * define modules in sparate files using the import and expoert statements.
 */

export interface Point{
    name:string,
    age:number,
}
export function Info(pInfo:Point){
    return `Hello,My name is ${pInfo.name} and age is ${pInfo.age}.`;

}