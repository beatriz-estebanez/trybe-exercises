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
