function isPalidrome(str) {
  let newStr = str.toLowerCase();
  let newStr1 = '';

  newStr1 = newStr.split('').reverse().join('');
  if (str === newStr1) return true;
}

function isPalidrome2(str) {
  let newStr = str.toLowerCase();
  for (i = 0; i <= newStr.length / 2; i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) return false;
    else return true;
  }
}

function isPalindrome3(inputString) {

    inputString = inputString.toLowerCase();
    let start = 0;
    let end = inputString.length - 1;
    for(start, end; start < end; start++, end--) {
        if(inputString[start] !== inputString[end]) {
            return false;
        }
    }
    return true;
}

console.log(isPalidrome('madam'));
console.log(isPalidrome('level'));
console.log(isPalidrome('abba'));
console.log('----------------------------');
console.log(isPalidrome2('Madam'));
console.log(isPalidrome2('levEl'));
console.log(isPalidrome2('aBba'));
console.log('----------------------------');
console.log(isPalindrome3('Madam'));
console.log(isPalindrome3('levEl'));
console.log(isPalindrome3('aBba'));
