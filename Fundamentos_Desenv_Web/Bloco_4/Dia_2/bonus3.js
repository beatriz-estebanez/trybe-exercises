let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

numbersMultNext = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index === numbers.length - 1) {
    numbersMultNext[index] = numbers[index] * 2;
  } else {
    numbersMultNext[index] = numbers[index] * numbers[index+1];
  }
}

console.log("Array resultante da multiplicação: " + numbersMultNext);