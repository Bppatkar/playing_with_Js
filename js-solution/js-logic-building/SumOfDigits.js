function sumOfDigit(num) {
  if (num < 0) return;
  let str = num.toString();
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    result += parseInt(str[i]);
  }

  return result;
}

function sumOfDigit2(num) {
  if (num < 0) return;
  if (num < 10) return num;
  return (num % 10) + sumOfDigit2(Math.floor(num / 10));
}

function sumOfDigit3(num) {
  if (num < 0) return;
  let result = 0;
  let temp = Math.abs(num);
  while (temp > 0) {
    result += temp % 10;
    temp = Math.floor(temp / 10);
  }
  return result;
}

console.log(sumOfDigit(12));
console.log(sumOfDigit(34));
console.log(sumOfDigit(123));
console.log(sumOfDigit(1234));
console.log('----------------------------');
console.log(sumOfDigit2(12));
console.log(sumOfDigit2(10));
console.log(sumOfDigit2(34));
console.log(sumOfDigit2(123));
console.log(sumOfDigit2(1234));
console.log('----------------------------');

console.log(sumOfDigit3(12));
console.log(sumOfDigit3(34));
console.log(sumOfDigit3(123));
console.log(sumOfDigit3(1234));
