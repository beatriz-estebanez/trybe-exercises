let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// a variável maiorValor inicia em numbers[0], pois se inicia-se com zero, o zero seria considerado o maior número, no caso de todos os valores do array serem negativos.
let maiorValor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorValor) {
    maiorValor = numbers[index];
  }
}

console.log("O maior valor é " + maiorValor)