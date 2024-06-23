//---------------------------------------------Task 1 ----------------------------------------------
/*
Times
Implement the times function which copies an array a specified number of times. If the second argument is not specified it must copy an array twice.

For example:

  times([1,2,3], 3); // [1,2,3,1,2,3,1,2,3]
  times([1,2,3]); // [1,2,3,1,2,3]
*/

function Times(nums:number[],argu:number=2) {
    let res:number[] = [];

    for(let i=0;i<argu;i++){
        res = res.concat(nums);
    }
    return res;
}
const arr1:number[] = [1,2,3];
let argu:number = 3; 
console.log(Times(arr1,argu));
console.log((Times(arr1)));

//------------------------------------------------Task3--------------------------------------------------

/*
Array NTH Element
Implement the everyNth function to get every nth element in the given array. By default, nth = 1.

For example:

console.log(everyNth([1, 2, 3, 4, 5, 6])); // [1,2,3,4,5,6]
console.log(everyNth([1, 2, 3, 4, 5, 6], 3)); // [3,6]
*/
function ArrayNth(nums1:number[] , argu:number=1){
   

    return nums1.filter((_, index) => (index + 1) % argu === 0);
}
    


console.log(ArrayNth([1, 2, 3, 4, 5, 6])); // [1,2,3,4,5,6]
console.log(ArrayNth([1, 2, 3, 4, 5, 6], 3)); // [3,6]