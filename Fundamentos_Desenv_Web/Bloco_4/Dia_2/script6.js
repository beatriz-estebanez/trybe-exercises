let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numImpares = 0;

for (let index = 0; index < numbers.length ; index += 1) {
  if (numbers[index] % 2 !== 0) {
    numImpares += 1;
  }
}

if (numImpares > 0) {
  console.log("Existem " + numImpares + " números ímpares");
} else {
  console.log("Nenhum valor ímpar encontrado");
}