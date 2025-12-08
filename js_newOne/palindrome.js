/* 
Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. 
Punctuation and numbers will not be part of the string.

Examples
Input: "never odd or even"
Output: true
Input: "eye"
Output: true

*/

function Palindrome(str) {
  // Remove spaces and convert to lowercase for comparison
  const cleaned = str.replace(/\s/g, '').toLowerCase();
  console.log(cleaned);

  // Check if the string equals its reverse
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

console.log(Palindrome('never odd or even'));
console.log(Palindrome('eye'));
