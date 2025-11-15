function calculatePower(base, expo) {
  return base ** expo;
}

function calculatePower1(base, expo) {
  let result = 1;
  for (i = 1; i <= expo; i++) {
    result *= base;
  }
  return result;
}

console.log(calculatePower(2, 3));
console.log(calculatePower(5, 4));
console.log('-----------------------');
console.log(calculatePower1(2, 3));
console.log(calculatePower1(5, 4));
