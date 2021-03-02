// 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome (word) {
  let result = 0;
  for (let letter = 1; letter <= (word.length/2); letter += 1) {
    if (word[letter - 1] === word[word.length - letter]) {
      result += 1;
    }
  }
  if (result === Math.trunc(word.length/2)) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome ('arara'));

// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indiceMaiorValor (array) {
  let indiceMaior = 0;
  for (let index in array) {
    if (array[index] > array[indiceMaior]) {
      indiceMaior = index;
    }
  }
  return 'O índice de maior valor é ' + indiceMaior;
} 


let arrayTeste = [2, 3, 6, 7, 10, 1];
console.log(indiceMaiorValor(arrayTeste));