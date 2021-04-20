const functions = require('./exercise1-p2');

const encode = functions.encode;
const decode = functions.decode;

describe('Test encode and decode functions', () => {

  it('test if they are functions', () => {
    expect(typeof encode && typeof decode).toBe('function');
  })

  it('test if encode is convertig the vowels', () => {
    expect(encode('aeiou')).toBe('12345');
  })

  it('test if consonants are not being converted', () => {
    expect(encode('bcd')).toEqual('bcd');
  })

  it('test if others numbers are not being converted', () => {
    expect(encode('6789')).toEqual('6789');
  })

  it('test string length encoded', () => {
    const stringTest = 'Beatriz';
    expect(encode(stringTest).length).toEqual(stringTest.length);
  })

  it('test string length decoded', () => {
    const stringTest = 'Beatriz';
    expect(decode(stringTest).length).toEqual(stringTest.length);
  })
})