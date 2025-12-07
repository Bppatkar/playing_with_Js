/* 
 Have the function LongestWord(sen) take the sen parameter being passed and return the 
largest word in the string. If there are two or more words that are the same length, return the 
f
 irst word from the string with that length. Ignore punctuation and assume sen will not be 
empty.
 Examples
 Input: "fun&!! time"
 Output: time
 Input: "I love dogs"
 Output: love
*/

function LongestWord(str) {
  let word = str.replace(/[^a-zA-Z\s]/g, '').split(' ');
  // console.log(word);
  let longestWord = '';
  for (let i = 0; i < word.length; i++) {
    if (word[i].length === 0) continue;
    if (word[i].length > longestWord.length) {
      LongestWord = word[i];
    }
  }
  return longestWord;
}

function LongestWord(str) {
  let words = str.replace(/[^a-zA-Z\s]/g, '').split(' ');
  return words.reduce((longest, word) =>
    word.length > longest.length ? word : longest
  );
}

function LongestWord(str) {
  let words = str.replace(/[^a-zA-Z\s]/g, '').split(' ');
  return words.sort((a, b) => b.length - a.length)[0];
}

console.log(LongestWord('fun&!! time'));
console.log(LongestWord('I love dogs'));
