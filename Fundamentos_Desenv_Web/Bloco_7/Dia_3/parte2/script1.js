const assert = require('assert');
// escreva a função addOne aqui

function addOne(arrayNumbers) {
  const newArray = [];
  for (let index in arrayNumbers) {
   // console.log(arrayNumbers[index]);
    newArray.push(arrayNumbers[index] + 1);
   // console.log(arrayNumbers[index]);
  }
  return newArray;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);