const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByAge = (age) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalsList = Animals.filter((animal) => animal.age === age);
      if (animalsList.length !== 0) return resolve(animalsList);
      reject('Nenhum animal com a idade procurada!');
    }, 1000);
  })
);

const getAnimals = (age) => {
  // Adicione o código aqui.
  return findAnimalsByAge(age).then(result => result);
};

module.exports = { getAnimals };