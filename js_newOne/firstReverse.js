/* 
 Have the function FirstReverse(str) take the str parameter being passed and return the 
string in reversed order. For example: if the input string is "Hello World and Coders" then your 
program should return the string sredoC dna dlroW olleH
*/

/* 
Examples
 Input: "coderbyte"
 Output: etybredoc

 Input: "I Love Code"
 Output: edoC evoL I
*/

// function FirstReverse(str) {
//   if (str.length === 0) return;
//   return str.split('').reverse().join('');
// }

const FirstReverse = (str) => {
  if (str.length === 0) return;
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};

console.log(FirstReverse('coderbyte'));
console.log(FirstReverse('I Love Code'));
