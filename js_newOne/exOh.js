/* 
Have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is"xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.

Examples
Input: "xooxxo"
Output: true
Input: "x"
Output: false
*/

function ExOh(str) {
  if (str.length < 0) return;
  str = str.trim();

  let xCount = 0;
  let oCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'x') xCount++;
    if (str[i] === 'o') oCount++;
    if (xCount === oCount) return true;
  }
  return false;
}

console.log(ExOh('xooxxo'));
console.log(ExOh('x'));
