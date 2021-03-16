let brasilianStates = document.querySelector('#estados');
const buttonSubmit = document.querySelector('#button-submit');

let statesOfBrazil = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Espírito Santo','Goiás','Rio de Janeiro','São Paulo','Santa Catarina','Minas Gerais'];

for (let index = 0; index < statesOfBrazil.length; index += 1) {
  let newState = document.createElement('option');
  newState.innerText = statesOfBrazil[index];
  brasilianStates.appendChild(newState);
}
  
  let dataInicio = document.querySelector('#data-inicio');
  let botaoTeste = document.querySelector('#teste');

function checkDate () {
  date = dataInicio.value;
  let dia = parseInt(date[0] + date[1]);
  let mes = parseInt(date[3] + date[4]);
  let ano = parseInt(date[6] + date[7] + date[8] + date[9]);
  console.log(dia);
  console.log(mes);
  console.log(ano);
  if (dia < 0 || dia > 31 || mes < 0 || mes > 12 || ano < 0) {
    alert('Preencha a data no formato padrão: dd/mm/aaaa');
  }
}

botaoTeste.addEventListener('click', checkDate);