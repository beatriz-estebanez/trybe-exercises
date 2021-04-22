const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};


describe('testing uppercase function', () => {
  it('testing callback', () => {
    return uppercase('bia', (result) =>
      expect(result).toBe('BIA'));
  })
})