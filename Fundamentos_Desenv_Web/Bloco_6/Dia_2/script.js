let brasilianStates = document.querySelector('#estados');

let statesOfBrazil = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Espírito Santo','Goiás','Rio de Janeiro','São Paulo','Santa Catarina','Minas Gerais'];

for (let index = 0; index < statesOfBrazil.length; index += 1) {
  let newState = document.createElement('option');
  newState.innerText = statesOfBrazil[index];
  newState.value = statesOfBrazil[index];
  brasilianStates.appendChild(newState);
}

const buttonAnswers = document.querySelector('#button-answers');
const buttonSubmit = document.querySelector('#button-submit');

// consolidação dos dados
function showAnswers() {
  //event.preventDefault()
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
  let newParag2 = document.createElement('p');
  newParag2.innerText = 'Resumo currículo: ' + document.getElementById('resume').value;
  respostas.appendChild(newParag2);
  //}
}

buttonAnswers.addEventListener('click', showAnswers);

// limpa as repostas
function cleanAnswers () {
  const paragrafos = document.querySelector('#answers').children;
  const sizeParag = paragrafos.length;
  for (let ind = 0; ind < sizeParag; ind += 1) {
    document.getElementById('answers').firstElementChild.remove();
  }
}

let botaoClean = document.querySelector('#clean');
botaoClean.addEventListener('click', cleanAnswers);
