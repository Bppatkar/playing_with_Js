const parantheses = {
  '{': '}',
  '(': ')',
  '[': ']',
};

// console.log(parantheses['{']);
// console.log(parantheses['(']);
// console.log(parantheses['[']);

function isBalanced(str) {
  const updatedArr = [];
  for (let char of str) {
    if (parantheses[char]) {
      updatedArr.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      const lastOpeningParantheses = updatedArr.pop();
      if (parantheses[lastOpeningParantheses] !== char) {
        return false;
      }
    }
  }
  return updatedArr.length === 0;
}

console.log('{[()]}', isBalanced('{[()]}'));

console.log('{[(])}', isBalanced('{[(])}'));

console.log('{[]', isBalanced('{[]'));
