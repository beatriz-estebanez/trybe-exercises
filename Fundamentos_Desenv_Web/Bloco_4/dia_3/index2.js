// Exercício 2 - Imprime triângulo retângulo de asteriscos

let n = 5;

for (let lin = 1; lin <= n; lin += 1) {
  let linha = "";
  for (let col = 0; col < n-lin; col +=1) {
    linha += " ";
  }
  for (let col = 0; col < lin; col +=1) {
    linha += "*";
  }
    console.log(linha);
}