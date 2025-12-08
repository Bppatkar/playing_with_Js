/* 
Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.

Examples
Input: "after badly"
Output: false
Input: "Laura sobs"
Output: true 
*/

function ABCheck(str) {
  if (str.length < 0) return;
  let patt = /(a...b|b...a)/;
  return patt.test(str);
}

function ABCheck(str) {
  if (str.length < 5) return;
  for (let i = 0; i < str.length - 4; i++) {
    if (str[i] === 'a') {
      if (str[i + 4] === 'b') {
        return true;
      }
    }
    if (str[i] === 'b') {
      if (str[i + 4] === 'a') {
        return true;
      }
    }
  }
  return false;
}

console.log(ABCheck('after badly'));
console.log(ABCheck('Laura sobs'));
