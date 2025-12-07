/* 
Have the function LetterChanges(str) take the str parameter being passed and modify it 
using the following algorithm. Replace every letter in the string with the letter following it in the 
alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, 
o, u) and finally return this modified string.
 Examples
 Input: "hello*3"
 Output: Ifmmp*3
 Input: "fun times!"
 Output: gvO Ujnft!
*/

function LetterChanges(str) {
  if (str.length === 0) return;
  str = str.trim().toLowerCase();
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char >= 'a' && char <= 'z') {
      let newChar =
        char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
      newStr += newChar;
    } else {
      newStr += char;
    }
  }

  return newStr;
}

console.log(LetterChanges('hello*3'));
console.log(LetterChanges('fun times!'));
