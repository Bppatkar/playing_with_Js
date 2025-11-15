//! do not use Array sort

function biggestNum(arr) {
  if (!arr || arr.length > 0) {
    let ans = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > ans) {
        ans = arr[i];
      }
    }
    return ans;
  }
}

function biggestNum2(arr) {
  const maxNum = Math.max(...arr);
  return maxNum;
}

console.log(biggestNum([3, 6, 1, 8, 3, 7]));
console.log(biggestNum([4, 5, 2]));
console.log(biggestNum([7, 84, 16, 38, 45, 76]));
console.log("--------------------------------------------")
console.log(biggestNum2([3, 6, 1, 8, 3, 7]));
console.log(biggestNum2([4, 5, 2]));
console.log(biggestNum2([7, 84, 16, 38, 45, 76]));
