const removeVowels = (word) => {
 // const characters = word.split('');
  let results = '';
  let number = 1;
  for (let index = 0; index < word.length; index += 1) {
    if (
      word[index] === 'a' ||
      word[index] === 'o' ||
      word[index] === 'i' ||
      word[index] === 'e' ||
      word[index] === 'u'
    ) {
      results += number;
      number += 1;
    } else {
      results += word[index];
    }
  }
  return results;
};

const assert = require('assert');

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof(removeVowels), 'function');

assert.strictEqual(removeVowels(parameter), result);