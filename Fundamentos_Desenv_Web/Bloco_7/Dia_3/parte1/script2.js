const assert = require('assert');

function myRemove(arr, item) {
  //console.log(arr);
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

assert.strictEqual(typeof(myRemove), 'function');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'Erro: Array errado');
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'Erro: Array errado');

const list = [6, 7, 8];
myRemove(list, 7);
assert.deepStrictEqual(list, [6, 7, 8]);

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'Erro: Array sofreu alteração');