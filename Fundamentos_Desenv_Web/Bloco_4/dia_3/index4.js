// 4- Depois, faça uma pirâmide com n asteriscos de base:

// O número deve ser ímpar e maior que 1 para formar uma pirâmide

let n = 29;

if (n % 2 === 0 || n <= 1) {
  console.log("O número informado deve ser ímpar e maior que 1");
} else {

  let numAsteriscos = 1;

  for (let lin = 1; lin <= n; lin += 1) {
    let line = '';
    let ref = (n - numAsteriscos) / 2;
    for (let col = 1; col <= n; col += 1) {
      if (col <= ref || col > ref + numAsteriscos) {
        line += ' ';
      } else {
        line += '*';
      }
    }
    numAsteriscos += 2;
    console.log(line);
    if (ref === 0) {
      break
    }
  }
}