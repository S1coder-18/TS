//-------------------------------------------Union types------------------------------------------------------
/**
 * Union type in ts allows us to specify that the variable can hold the value of multiple types.
 * We use the vertical bar(|) to define the union types.
 * When using union types in ts , it is essential to ensure that at leasst one of the types in the 
 * union includes all the requried properties.
 * Failure to do so will request in a type error during compilation.
 */

const userInput:(value:string | number) => void =  (value:string | number) =>{
                if(typeof value === 'number'){
                    return value*2;
                }else if(typeof value === 'string'){
                    return value.toUpperCase();
                }else{
                    throw new Error("Invalid input");
                }
}
console.log(userInput("Sachin"));
console.log(userInput(10));