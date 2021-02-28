// 3- Agora inverta o lado do triângulo. Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.


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