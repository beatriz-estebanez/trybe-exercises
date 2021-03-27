const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
  let personGreet = [];
  for (const person in people) {
    personGreet.push(greeting + people[person]);
  }
  return personGreet;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);