// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


let n = 4;

for (let lin = 0; lin < n; lin += 1) {
  let linha = "";
  for (let col = 0; col < n; col +=1) {
    linha += "*";
  }
    console.log(linha);
}