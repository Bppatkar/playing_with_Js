/* 
Have the function LetterCapitalize(str) take the str parameter being passed and 
capitalize the first letter of each word. Words will be separated by only one space.
 Examples
 Input: "hello world"
 Output: Hello World
 Input: "i ran there"
 Output: I Ran There
*/

function LetterCapitalize(str) {
  if (str.length === 0) return;
  str = str.trim().toLowerCase();
  let newStr = '';

   for (let i = 0; i < str.length; i++) {
    let newWord = i === 0 || str[i - 1] === ' ';
    if (newWord) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(LetterCapitalize('hello world'));
console.log(LetterCapitalize('i ran there'));
