
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((bigArray, array) => bigArray.concat(array), []);

/*   const makeArray = (bigArray, array) => {
    array.forEach((element) => {
      bigArray.push(element);
    });

    return bigArray;
    };

  return arrays.reduce(makeArray, []); */
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);