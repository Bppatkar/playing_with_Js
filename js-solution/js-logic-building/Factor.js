function calculateFactors(num) {
  if (num < 1) return;

  let result = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  return result;
}

console.log('Factors of 4 are', calculateFactors(4));
console.log('Factors of 14 are', calculateFactors(14));
console.log('Factors of 35 are', calculateFactors(35));
