const assert = require('assert');
// escreva a função wordLengths aqui

function wordLengths (palavras) {
  sizes = [];
  for (let index in palavras) {
    sizes.push(palavras[index].length);
  }
  //console.log(sizes);
  return sizes;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);