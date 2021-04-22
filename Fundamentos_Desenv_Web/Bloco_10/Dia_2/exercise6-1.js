const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalFound = Animals.find((animal) => animal.name === name);
      if (animalFound) return resolve(animalFound);
      reject('Nenhum animal com esse nome!');
    }, 1000);
  })
);

const getAnimal = (name) => {
  // Adicione o código aqui.
  return findAnimalByName(name).then(result => result);
};

module.exports = { getAnimal };