const { it, expect } = require('@jest/globals');
const sum = require('./exercise1');

describe('Sum two numbers', () => {
  it('4 + 5 = 9', () => {
    expect(sum(4, 5)).toBe(9)
  });

  it('0 + 0 = 0', () => {
    expect(sum(0, 0)).toBe(0)
  });

  it('função sum lança erro quando parâmetro é string', () => {
    expect(() => sum(4, '5')).toThrow()
  });

  it('mensagem de erro deve ser "parameters must be numbers"', () => {
    expect(() => sum(4, '5')).toThrowError()
  });
})