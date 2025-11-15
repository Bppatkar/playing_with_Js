function calculateVowelAndConsonants(str) {
  let newStr = str.toLowerCase().replace(/ /g, '');
  let vowels = 'aeiou';
  let consonants = 'bcdfghjklmnpqrstvwxyz';

  let vowelsCount = 0;
  let consonantsCount = 0;

  for (let i = 0; i < newStr.length; i++) {
    if (vowels.includes(newStr[i])) vowelsCount++;
    else if (consonants.includes(newStr[i])) consonantsCount++;
    else console.log(newStr[i], 'Is neither vowel nor consonant');
  }

  return { vowelsCount, consonantsCount };
}

console.log('Hello World', calculateVowelAndConsonants('Hello World'));
console.log('Ashish Saluja', calculateVowelAndConsonants('Ashish Saluja'));
console.log(
  'Ashish Saluja Saluja',
  calculateVowelAndConsonants('Ashish Saluja Saluja')
);
console.log(
  'Ashish Saluja 123',
  calculateVowelAndConsonants('Ashish Saluja 123')
);
