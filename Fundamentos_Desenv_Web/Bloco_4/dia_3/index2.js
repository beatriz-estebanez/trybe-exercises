// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.


let n = 5;

for (let lin = 1; lin <= n; lin += 1) {
  let linha = '';
  for (let col = 0; col < lin; col +=1) {
    linha += '*';
  }
    console.log(linha);
}