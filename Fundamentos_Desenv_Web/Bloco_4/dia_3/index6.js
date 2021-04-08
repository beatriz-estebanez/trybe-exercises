// 6- Faça um programa que diz se um número definido numa variável é primo ou não.

let numero = 23;
let numDivisores = 0;

for (let num = 1; num <= numero; num += 1) {
  if ((numero % num) === 0) {
    numDivisores += 1;
  }
}

if (numDivisores === 2) {
  console.log("O numéro " + numero + " é primo!")
} else {
  console.log("O numéro " + numero + " NÃO é primo!")
}