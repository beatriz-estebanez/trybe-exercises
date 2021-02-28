// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

let n = 9;

if (n % 2 === 0 || n <= 1) {
  console.log("O número informado deve ser ímpar e maior que 1");
} else {

  // numAsteriscos começa na linha 1, com 1* e aumenta de 2 em 2
  let numAsteriscos = 1;
  let espaco = ' ';
  let asteristo = '*';
  let numLinhas = n;
  
  for (let lin = 1; lin <= numLinhas; lin += 1) {
    let linha = '';

    if (lin === 1) {
        linha += espaco.repeat((n-1)/2) + '*' + espaco.repeat((n-1)/2);
    } else if ( lin === numLinhas) {
      linha += asteristo.repeat(n);
    } else {
      let espacoExterno = (n-numAsteriscos) / 2;
      let espacoInterno = numAsteriscos - 2;
      for (let x = 1; x <= espacoExterno; x += 1) {
        linha += ' ';
      }
      linha += '*';
      for (let z = 1; z <= espacoInterno; z += 1) {
        linha += ' ';
      }
      linha += '*';
      for (let t = 1; t <= espacoExterno; t += 1) {
        linha += ' ';
      }
    }
    console.log(linha);
    numAsteriscos += 2;
    numLinhas -= 1;
  }
}