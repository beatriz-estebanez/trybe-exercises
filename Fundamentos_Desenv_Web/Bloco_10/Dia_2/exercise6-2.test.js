const { getAnimals } = require('./exercise6-2');

describe('Testando promise - findAnimalsByAge', () => {
  describe('Quando existe algum animal com a idade procurada', () => {
    test('Retorne lista de objetos dos animais', () => {
      expect.assertions(1);
      return getAnimals(2).then(result => {
        expect(result).toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }]);
      });
    });
  });

  describe('Quando não existem animais com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimals(8).catch(error =>
        expect(error).toBe('Nenhum animal com a idade procurada!')
      );
    });
  });
});