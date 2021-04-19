const myRemoveWithoutCopy = require("./exercise3");

describe('retira elemento do array', () => {

  it('requisito 1', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })

  it('requisito 2', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })

  it('requisito 3', () => {
    myArray = [10, 20, 30];
    myRemoveWithoutCopy(myArray, 10);
    expect(myArray).not.toEqual([10, 20, 30])
  })

  it('requisito 4', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})