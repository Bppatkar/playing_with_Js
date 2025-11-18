function isArmstrong(num) {
  let newNnum = num;
  let sum = 0;
  let digits = [];

  while (newNnum > 0) {
    let lastDigit = newNnum % 10;
    newNnum = Math.floor(newNnum / 10);
    digits.push(lastDigit);
  }

  let length = digits.length;
  // console.log("Length is", length);
  digits.forEach((e) => (sum += Math.pow(e, length)));
  return sum === num;
}
console.log('isArmstrong(153)', isArmstrong(153));
console.log('isArmstrong(370)', isArmstrong(370));
console.log('isArmstrong(371)', isArmstrong(371));

console.log('isArmstrong(132)', isArmstrong(132));
console.log('isArmstrong(18273)', isArmstrong(18273));

console.log('isArmstrong(92727)', isArmstrong(92727));
