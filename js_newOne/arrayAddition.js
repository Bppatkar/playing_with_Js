/* 
Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return 
the string true if any combination of numbers in the array (excluding the largest number) can be
added up to equal the largest number in the array, otherwise return the string false. For 
example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 
= 23. The array will not be empty, will not contain all the same elements, and may contain 
negative numbers.
Examples

Input: [5,7,16,1,2]
Output: false
Input: [3,5,-1,8,12]
Output: true
*/

// function ArrayAdditionI(arr) {
//   if (!arr.length) return;

//   let sortedArr = arr.sort((a, b) => a - b);
//   let largestNum = sortedArr.pop();
//   let sums = [];

//   for (let i = 0; i < Math.pow(2, sortedArr.length); i++) {
//     let sum = 0;
//     let bitMask = i.toString(2).split('');

//     while (bitMask.length < sortedArr.length) {
//       bitMask.unshift('0');
//     }

//     for (let j = 0; j < bitMask.length; j++) {
//       if (bitMask[j] === '1') {
//         sum += sortedArr[j];
//       }
//     }
//     sums.push(sum);
//   }
//   return sums.indexOf(largestNum) !== -1;
// }

function ArrayAdditionI(arr) {
  const max = Math.max(...arr);
  const rest = arr.filter((num) => num !== max);

  const canSum = (target, index) => {
    if (target === 0) return true;
    if (index >= rest.length) return false;
    return canSum(target - rest[index], index + 1) || canSum(target, index + 1);
  };
  return canSum(max, 0).toString();
}

console.log(ArrayAdditionI([5, 7, 16, 1, 2]));
console.log(ArrayAdditionI([3, 5, -1, 8, 12]));
