const myRemove = require('./exercise2');

describe('remove item from array', () => {
  it('funcao recebe [1, 2, 3, 4] e retorna [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })

  it('funcao recebe [1, 2, 3, 4] e não retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })

  it('array recebido não foi alterado', () => {
    const arrayTeste = [1, 2, 3, 4];
    myRemove(arrayTeste, 2);
    expect(arrayTeste).toEqual([1, 2, 3, 4])
  })

  it('funcao recebe [1, 2, 3, 4], 5 e retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})