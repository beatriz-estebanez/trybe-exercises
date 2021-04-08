
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((numberOfA, name) =>
    numberOfA + (name.split('').filter((letter) =>
      letter.toUpperCase() === 'A')).length, 0);

}

/*   const getNumberOfA = ((numberOfA, name) => {
    const filterA = name.split('').filter((letter) =>
      letter.toUpperCase() === 'A');
    return numberOfA + filterA.length;
  })

return names.reduce(getNumberOfA, 0);
} */

/*   const getNumberOfA = ((numberOfA, name) =>
    name.split('').forEach((letter) => {
      console.log(letter);
      console.log(numberOfA);
     // return letter === 'a' ? numberOfA += 1 : numberOfA}));
     return numberOfA += 1}));

  return names.reduce(getNumberOfA, 0);
} */

assert.deepStrictEqual(containsA(), 20);