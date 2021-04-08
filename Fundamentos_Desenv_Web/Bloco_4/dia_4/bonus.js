// 1. (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

let number = "XXVIII";

let romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

let soma = 0;
let num1;
let num2;

if (number.length === 1) {
  soma = romanNumerals[number[0]];
} else {
  for (let index=0; index < number.length-1; index += 1) {
    num1 = romanNumerals[number[index]];
    num2 = romanNumerals[number[index+1]];
    if (index === 0) {  
      if (num1 >= num2) {
        soma += num1 + num2;
      } else {
        soma += num2 - num1;
      } 
    } else {
      if (num1 >= num2) {
        soma += num2;
      } else {
        soma += num2 - 2 * num1;
      }
    }
  }
}

console.log(soma);