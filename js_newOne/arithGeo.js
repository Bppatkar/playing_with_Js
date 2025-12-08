/*
Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, 
where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the 
same elements.
Examples
Input: [5,10,15]
Output: Arithmetic
Input: [2,4,16,24]
Output: -1
*/

function ArithGeo(arr) {
  if (!arr.length) return;

  // Check arithmetic sequence
  const arithmeticDiff = arr[1] - arr[0];
  let isArithmetic = true;
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== arithmeticDiff) {
      isArithmetic = false;
      break;
    }
  }
  if (isArithmetic) return 'Arithmetic';

  // Check geometric sequence
  const geometricRatio = arr[1] / arr[0];
  let isGeometric = true;
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] / arr[i - 1] !== geometricRatio) {
      isGeometric = false;
      break;
    }
  }
  if (isGeometric) return 'Geometric';

  return -1;
}

console.log(ArithGeo([5, 10, 15]));
console.log(ArithGeo([2, 4, 16, 24]));
console.log(ArithGeo([2, 6, 18, 54]));
