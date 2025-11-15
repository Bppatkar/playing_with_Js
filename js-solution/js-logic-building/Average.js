function calculateAverage(arr) {
  let sumOfElement = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfElement += arr[i];
  }

  let result = sumOfElement / arr.length;
  return result;
}

console.log('[1, 2, 4]', calculateAverage([1, 2, 4]));
console.log('[1, 5, 7, 14]', calculateAverage([1, 2, 7, 14]));

console.log('[1, 5, 7, 35]', calculateAverage([1, 5, 7, 35]));
