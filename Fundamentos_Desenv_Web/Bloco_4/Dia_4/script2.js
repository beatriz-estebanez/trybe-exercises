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

// 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indiceMenorValor (vetor) {
  let indiceMenor = 0;
  for (let indice in vetor) {
    if (vetor[indice] < vetor[indiceMenor]) {
      indiceMenor = indice;
    }
  }
  return 'O índice do menor valor é ' + indiceMenor;
}

console.log(indiceMenorValor([2, 4, 6, 7, 10, 0, -3]));


// 4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function nomeMaisCaracter (nome) {
  let maiorNome = '';
  for (let indiceName in nome) {
    if (nome[indiceName].length > maiorNome.length) {
      maiorNome = nome[indiceName];
    }
  }
  return maiorNome;
}

console.log(nomeMaisCaracter(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


// 5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function NumberRepeated (numbers) {
  let repeatNumber = 0;
  for (let num1 = 0; num1 < numbers.length; num1 += 1) {
    let repeat = 0;
    for (let num2 = num1+1; num2 < numbers.length; num2 +=1) {
      if (numbers[num1] === numbers[num2]) {
      repeat += 1;
      }
    }
    if (repeat > repeatNumber) {
      repeatNumber = numbers[num1];
    }
  }
  return 'O número que mais se repete é o: ' + repeatNumber;
}

console.log(NumberRepeated([2, 3, 2, 3, 8, 2, 3]));


// 6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function soma (numero) {
  let soma = 0;
  for (let indexNumber = 1; indexNumber <= numero; indexNumber += 1) {
    soma += indexNumber;
  }
  return 'A soma de 1 até ' + numero + ' é ' + soma;
}

console.log(soma(5));


// 7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word.

function verificaFimPalavra (string, ending) {
  let start = string.length - ending.length;
  let equal = 0;
  for (let indexLetter = 0; indexLetter <= ending.length-1; indexLetter += 1) {
    if (string[indexLetter+start] === ending[indexLetter]) {
      equal += 1;
    }
  }
  if (equal === ending.length) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaFimPalavra('Trybe' , 'be'));
