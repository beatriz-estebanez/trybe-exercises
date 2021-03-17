let brasilianStates = document.querySelector('#estados');

let statesOfBrazil = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Espírito Santo','Goiás','Rio de Janeiro','São Paulo','Santa Catarina','Minas Gerais'];

for (let index = 0; index < statesOfBrazil.length; index += 1) {
  let newState = document.createElement('option');
  newState.innerText = statesOfBrazil[index];
  newState.value = statesOfBrazil[index];
  brasilianStates.appendChild(newState);
}


let dataInicio = document.querySelector('#data-inicio');
let botaoTeste = document.querySelector('#teste');

/* function blockSubmission(event) {
  event.preventDefault()
} */

  function checkDate () {
    date = dataInicio.value;
    let dia = parseInt(date[0] + date[1]);
    let mes = parseInt(date[3] + date[4]);
    let ano = parseInt(date[6] + date[7] + date[8] + date[9]);
    if (dia < 0 || dia > 31 || mes < 0 || mes > 12 || ano < 0) {
      alert('Preencha a data no formato padrão: dd/mm/aaaa');
      blockSubmission();
    }
  }
  
//botaoTeste.addEventListener('click', checkDate);
//botaoTeste.addEventListener('click', blockSubmission);

//const buttonSubmit = document.querySelector('#button-submit');

// consolidação dos dados

function teste () {

  // imprime as respostas que são Input
  let sizeInputs = document.getElementsByTagName('input').length;
  for (let i = 0; i < sizeInputs; i += 1) {
    const element = document.getElementsByTagName('input')[i].parentNode.innerText;
    let res = document.getElementsByTagName('input')[i].value;
    const respostas = document.getElementById('answers');
    let newParag = document.createElement('p');
    newParag.innerText = element + ' ' + res;
    respostas.appendChild(newParag);
  }

  // imprime a resposta do Estado - select
  let newParag = document.createElement('p');
  newParag.innerText = 'Estado: ' + brasilianStates.value;
  const respostas = document.getElementById('answers');
  respostas.appendChild(newParag);

  // imprime a resposta do resumo - textArea
}

botaoTeste.addEventListener('click', teste);

let botaoClean = document.querySelector('#clean');

function cleanAnswers () {
  const paragrafos = document.querySelector('#answers').children;
  console.log(paragrafos)
  const sizeParag = paragrafos.length;
  for (let ind = 0; ind < sizeParag; ind += 1) {
    document.getElementById('answers').firstElementChild.remove();
  }
}

botaoClean.addEventListener('click', cleanAnswers);