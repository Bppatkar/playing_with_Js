/* 
Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass and moo" would return 8). Do not count y as a vowel for this challenge.

Examples
Input: "hello"
Output: 2
Input: "coderbyte"
Output: 3
*/

function VowelCount(str) {
  if (str.length < 0) return;

  let vowels = 'aeiouAEIOU';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

function VowelCount(str) {
  return str.split('').filter((ch) => {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(ch.toLowerCase()) > -1;
  }).length;
}

console.log(VowelCount('hello'));
console.log(VowelCount('coderbyte'));
