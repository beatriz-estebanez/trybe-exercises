const myFizzBuzz = require('./exercise4');

describe('funcao fizzbuzz', () => {

  it('Requisito 1 - divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  })

  it('Requisito 2 - divisível por 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz')
  })

  it('Requisito 3 - divisível por 5', () => {
    expect(myFizzBuzz(35)).toBe('buzz')
  })

  it('Requisito 4 - não divisível por 3 e 5', () => {
    expect(myFizzBuzz(103)).toBe(103)
  })

  it('Requisito 5 - não é número', () => {
    expect(myFizzBuzz('5')).toBeFalsy()
  })
})