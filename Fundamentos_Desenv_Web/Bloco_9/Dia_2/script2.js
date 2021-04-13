const { rejects } = require("assert");
const { resolve } = require("path");

const checkSumArray = () => {

  const array = [];

  for (let index = 0; index < 10; index += 1) {
    array.push(Math.pow(Math.floor(Math.random() * 50), 2));
  }
  
  const soma = array.reduce((acc, crr) => acc + crr, 0);
  console.log(soma);

  const promise = new Promise((resolve, reject) => {
    if (soma < 8000) {
      resolve('Promise resolvida');
    } else {
      reject('Promise rejeitada');
    }
  })
  .then(resp => console.log(resp))
  .catch(resp => console.log(resp));
}

checkSumArray();