function matrixMultiplication(arr1, arr2) {
  const rowInResult = arr1.length;
  const colInResult = arr2[0].length;

  const rowInSecondArray = arr2.length;
  const result = [];

  for (let i = 0; i < rowInResult; i++) {
    for (let j = 0; j < colInResult; j++) {
      let sumOfCellValue = 0;
      for (let k = 0; k < rowInSecondArray; k++) {
        sumOfCellValue += arr1[i][k] * arr2[k][j];
      }
      if (!result[i]) {
        result[i] = [];
      }
      result[i][j] = sumOfCellValue;
    }
  }
  return result;
}

const firstArray = [
  [1, 2, 3],
  [3, 4, 8],
];
const secondArray = [
  [5, 6],
  [7, 8],
  [7, 9],
];

console.log(matrixMultiplication(firstArray, secondArray));
