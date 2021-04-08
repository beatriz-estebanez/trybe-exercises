// 4- Depois, faça uma pirâmide com n asteriscos de base:

// O número deve ser ímpar e maior que 1 para formar uma pirâmide

let n = 7;

if (n % 2 === 0 || n <= 1) {
  console.log("O número informado deve ser ímpar e maior que 1");
} else {

  let numAsteriscos = 1;
  let numLinhas = n;

  for (let lin = 1; lin <= numLinhas; lin += 1) {
    let line = '';
    let ref = (n - numAsteriscos) / 2;
    for (let col = 1; col <= n; col += 1) {
      if ((col <= ref) || (col > ref + numAsteriscos)) {
        line += ' ';
      } else {
        line += '*';
      }
    }
    numAsteriscos += 2;
    numLinhas -= 1;
    console.log(line);
  }
}