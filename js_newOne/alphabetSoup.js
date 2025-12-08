/* 
Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

Examples
Input: "coderbyte"
Output: bcdeeorty
Input: "hooplah"
Output: ahhloop
*/

// function AlphabetSoup(str) {
//   let arr = str.trim().split('').sort().join('');
//   return arr;
// }

function AlphabetSoup(str) {
  return str
    .split('')
    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .join('');
}

console.log(AlphabetSoup('coderbyte'));
console.log(AlphabetSoup('hooplah'));
