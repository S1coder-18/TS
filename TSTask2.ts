/* 
Last to first
Write a function to change the position of the first and the last characters in the given string.

Example:

    lastToFirst('loop'); // pool;
    lastToFirst('ab'); // ba;
    lastToFirst('a'); // a;
*/
function lastToFirst(str: string): string {
    if (str.length <= 1) {
        return str;
    }

    const charArray = str.split('');
    const firstChar = charArray[0];
    const lastChar = charArray[charArray.length - 1];

    charArray[0] = lastChar;
    charArray[charArray.length - 1] = firstChar;

    return charArray.join('');
}

// // Example usage:
// console.log(lastToFirst('loop')); // pool
// console.log(lastToFirst('ab'));   // ba
// console.log(lastToFirst('a'));    // a
// console.log(lastToFirst(''));     // (empty string)


//---------------------------------------------------Task2----------------------------------------------------
/*
Days to New Year
Write a function to calculate the days left until New Year (01.01.2023).

It must accept the date in 2 formats: Date() object and a string in 'DD.MM.YYYY' ;

Example:

    getDaysToNewYear(new Date(2022, 12, 31)); // 1
    getDaysToNewYear(new Date(2022, 5, 15)); // 200
    getDaysToNewYear('22.04.2020'); // 994
*/
function getDaysToNewYear(input: Date | string): number {
    let givenDate: Date;
    
    if (input instanceof Date) {
      givenDate = input;
    } else {
      const [day, month, year] = input.split('.').map(Number);
      givenDate = new Date(year, month - 1, day);
    }
  
    const newYearDate = new Date(2023, 0, 1); // January 1, 2023
  
    // Get the difference in time
    const timeDifference = newYearDate.getTime() - givenDate.getTime();
  
    // Convert time difference to days
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
  
    return daysDifference;
  }
  
//   // Example usage:
//   console.log(getDaysToNewYear(new Date(2022, 11, 31))); // 1 (Note: months are 0-indexed in Date objects)
//   console.log(getDaysToNewYear(new Date(2022, 4, 15))); // 231
//   console.log(getDaysToNewYear('22.04.2020')); // 619
  

//Calculating the average--------------of given array and returning that average------------------------


function CalculateAverage(nums:number[]){
    let sum:number =0;
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
    }
    let average:number = (sum/nums.length);
    return average;
}

console.log(CalculateAverage([1,2,3,4,5,6]));

//-------------Finding the maximum value--------------------------------------------------------

function fincdMaxValue(num:number[]){
    let MaxValue:number = -1;
    for(let i=0;i<num.length;i++){
         if(MaxValue<num[i]){
            MaxValue=num[i];
         }
    }
    return MaxValue;
}

console.log(fincdMaxValue([1,23,5]));