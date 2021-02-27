// Exercício 1 - Imprime quadrado de asteriscos

let n = 4;

for (let lin = 0; lin < n; lin += 1) {
  let linha = "";
  for (let col = 0; col < n; col +=1) {
    linha += "*";
  }
    console.log(linha);
}