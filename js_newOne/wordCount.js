/* 
Have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains (e.g. "Never eat shredded wheat or cake" would return 6). Words will be separated by single spaces.

Examples
Input: "Hello World"
Output: 2
Input: "one 22 three"
Output: 3
*/

function WordCount(str) {
  if (str.length < 0) return;
  str = str.trim();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      count++;
    }
  }
  return count + 1;
}

function WordCount(str) {
  if (str.length < 0) return;
  return str.split(' ').length;
}

console.log(WordCount('Hello World'));
console.log(WordCount('one 22 there'));
