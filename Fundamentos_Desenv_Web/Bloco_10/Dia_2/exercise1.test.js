const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('testing uppercase function', (done) => {
  it('testing callback', () => {
    uppercase('bia', (result) =>
      expect(result).toBe('BIA'));
      done();
  })
})