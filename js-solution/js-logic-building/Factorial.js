function factorialFinder(num) {
  if (num < 0) return;
  let result = 1;
  for (let i = num; i >= 1; i--) {
    result *= i;
  }
  return result;
}

function factorialFinder2(num) {
  if (num == 0 || num == 1) return 1;
  return num * factorialFinder2(num - 1);
}

console.log('factorial of 5', factorialFinder(5));
console.log('factorial of 6', factorialFinder2(6));
