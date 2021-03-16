/* <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Tela de Login</h1>
  <label for="email">E-mail:</label>
  <input type="text" id='email' placeholder="Digite seu e-mail" required autocomplete="off" autofocus>
  <label for="senha">Senha:</label>
  <input type="password" id='senha' placeholder="Digite sua senha" required>
  <input type="checkbox">Lembre-me
  <button id='botao'>Entrar</button>
</body>
</html> */

let dataInicio = '15/11/1994';
console.log(dataInicio.length);

//for (let ind = 0; ind < dataInicio.length; ind += 1) {
  let dia = parseInt(dataInicio[0] + dataInicio[1]);
  let mes = parseInt(dataInicio[3] + dataInicio[4]);
  let ano = parseInt(dataInicio[6] + dataInicio[7] + dataInicio[8] + dataInicio[9]);
//}
console.log(dia);
console.log(mes);
console.log(ano);