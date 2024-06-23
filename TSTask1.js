//---------------------------------------------Task 1 ----------------------------------------------
/*
Times
Implement the times function which copies an array a specified number of times. If the second argument is not specified it must copy an array twice.

For example:

  times([1,2,3], 3); // [1,2,3,1,2,3,1,2,3]
  times([1,2,3]); // [1,2,3,1,2,3]
*/
function Times(nums, argu) {
    if (argu === void 0) { argu = 2; }
    var res = [];
    for (var i = 0; i < argu; i++) {
        res = res.concat(nums);
    }
    return res;
}
var arr1 = [1, 2, 3];
var argu = 3;
console.log(Times(arr1, argu));
console.log((Times(arr1)));
//------------------------------------------------Task3--------------------------------------------------
/*
Array NTH Element
Implement the everyNth function to get every nth element in the given array. By default, nth = 1.

For example:

console.log(everyNth([1, 2, 3, 4, 5, 6])); // [1,2,3,4,5,6]
console.log(everyNth([1, 2, 3, 4, 5, 6], 3)); // [3,6]
*/
function ArrayNth(nums1, argu) {
    if (argu === void 0) { argu = 1; }
    return nums1.filter(function (_, index) { return (index + 1) % argu === 0; });
}
console.log(ArrayNth([1, 2, 3, 4, 5, 6])); // [1,2,3,4,5,6]
console.log(ArrayNth([1, 2, 3, 4, 5, 6], 3)); // [3,6]
