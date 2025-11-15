// 'bhanu' - 'unahb'
// 'Software development' - 'tnempoleved erawtfoS'
// "coderbyte" - "etybredoc"
// 'I Love Code' - 'edoC evoL I'

function strRev(str) {
  if (typeof str !== 'string') return;
  return str.split('').reverse().join('');
}

//? with loop
function strRev2(str) {
  if (typeof str !== 'string') return;
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

//? with recursion
function strRev3(str) {
  if (typeof str !== 'string') return;
  if (str === '') return '';
  else return strRev3(str.substring(1)) + str.charAt(0);
}

//? with slice
function strRev4(str) {
  if (typeof str !== 'string') return;
  if (str == '') return '';
  else return strRev4(str.slice(1)) + str.charAt(0);
}

//! Method: Similar to strRev3 but uses slice instead of substring
//! Difference: slice and substring behave slightly differently with negative indices

console.log(strRev('bhanu'));
console.log(strRev('Software development'));
console.log(strRev('coderbyte'));
console.log(strRev('I Love Code'));
console.log('-------------------------');
console.log(strRev2('bhanu'));
console.log(strRev2('Software development'));
console.log(strRev2('coderbyte'));
console.log(strRev2('I Love Code'));
console.log('-------------------------');
console.log(strRev3('bhanu'));
console.log(strRev3('Software development'));
console.log(strRev3('coderbyte'));
console.log(strRev3('I Love Code'));
console.log('-------------------------');
console.log(strRev4('bhanu'));
console.log(strRev4('Software development'));
console.log(strRev4('coderbyte'));
console.log(strRev4('I Love Code'));

let str = 'hello';

console.log(str.slice(1, 3)); // "el"
console.log(str.substring(1, 3)); // "el"

console.log(str.slice(-3)); // "llo" (counts from end)
console.log(str.substring(-3)); // "hello" (treats -3 as 0)

console.log(str.slice(1, -1)); // "ell"
console.log(str.substring(1, -1)); // "h" (swaps and treats as substring(0,1))
