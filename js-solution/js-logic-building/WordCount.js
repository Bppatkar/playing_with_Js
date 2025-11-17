// 'this is a sentence' - 4
// 'what is the date today' - 5

function wordCounter(str) {
  let newStr = str.trim();
  let count = 1;
  for (let i = 1; i < newStr.length; i++) {
    if (newStr[i] === ' ' && newStr[i - 1] !== ' ') count++;
  }
  return count;
}

function wordCounter1(str) {
  let newStr = str.trim().split(' ');

  let result = newStr.filter((e) => e != '');
  return result.length;
}

console.log('This is a sentence', wordCounter('This is a sentence'));
console.log('What is the date today', wordCounter('What is the date today'));

console.log(
  'What is    the date today',
  wordCounter('What is    the date today')
);
console.log(
  ' What is    the date today ',
  wordCounter(' What is    the date today ')
);
console.log('---------------------------------------');
console.log('This is a sentence', wordCounter1('This is a sentence'));
console.log('What is the date today', wordCounter1('What is the date today'));

console.log(
  'What is    the date today',
  wordCounter1('What is    the date today')
);
console.log(
  ' What is    the date today ',
  wordCounter1(' What is    the date today ')
);
