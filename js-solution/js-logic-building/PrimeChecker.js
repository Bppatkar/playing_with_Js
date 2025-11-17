function isPrime(num) {
  if (num <= 1) return false;
  let result = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      result = false;
      break;
    }
  }
  return result;
}

function isPrime2(num) {
  let result = true;

  if (num === 2) return (result = true);
  else if (num % 2 === 0) {
    result = false;
  }

  if (result === true) {
    for (let i = 3; i < num; i += 2) {
      if (num % i === 0) {
        result = false;
        break;
      }
    }
  }

  return result;
}

console.log('5', isPrime(5));
console.log('4', isPrime(4));
console.log('97', isPrime(97));
console.log('2', isPrime(2));

console.log('isPrime2');
console.log('97', isPrime2(97));
console.log('5', isPrime2(5));
console.log('4', isPrime2(4));
console.log('2', isPrime2(2));
