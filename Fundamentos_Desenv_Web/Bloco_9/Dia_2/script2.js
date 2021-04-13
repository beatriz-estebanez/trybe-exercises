const { rejects } = require("assert");
const { resolve } = require("path");

const resultDivision = (sum) => {
  return [2, 3, 5, 10].map((number) => sum / number);
} // ideia retirada do gabarito do course

const checkSumArray = () => {

  const array = [];

  for (let index = 0; index < 10; index += 1) {
    array.push(Math.pow(Math.floor(Math.random() * 50), 2));
  }

  const soma = array.reduce((acc, crr) => acc + crr, 0);
  console.log(soma);

  const promise = new Promise((resolve, reject) => {
    if (soma < 8000) {
      resolve(soma);
    } else {
      reject('É mais de oito mil! Essa promise deve estar quebrada!');
    }
  })
  .then(sum => resultDivision(sum))
  .then(newArray => newArray.reduce((acc, crr) => acc + crr, 0))
  .catch(error => console.log(error));
}

checkSumArray();