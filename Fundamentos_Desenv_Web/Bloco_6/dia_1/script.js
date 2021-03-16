let brasilianStates = document.querySelector('#estados');

let statesOfBrazil = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Espírito Santo','Goiás','Rio de Janeiro','São Paulo','Santa Catarina','Minas Gerais'];

for (let index = 0; index < statesOfBrazil.length; index += 1) {
  let newState = document.createElement('option');
  newState.innerText = statesOfBrazil[index];
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

  let sizeInputs = document.getElementsByTagName('input').length;
  //const nome = document.getElementById('name').parentNode.innerText;
  console.log(sizeInputs)

  for (let i = 0; i < sizeInputs; i += 1) {
    
    const element = document.getElementsByTagName('input')[i].parentNode.innerText;

  //let res = document.querySelector('#name').value;
    let res = document.getElementsByTagName('input')[i].value;

    const respostas = document.getElementById('answers');

  //let parag = '<p>' + nome + ' ' + res + '</p>';
  //console.log(parag);

    let newParag = document.createElement('p');
    newParag.innerText = element + ' ' + res;

    respostas.appendChild(newParag);
  }
}

botaoTeste.addEventListener('click', teste);
