let statesOfBrazil = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Espírito Santo','Goiás','Rio de Janeiro','São Paulo','Santa Catarina','Minas Gerais'];

let brasilianStates = document.querySelector('#estados');

for (let index = 0; index < statesOfBrazil.length; index += 1) {
  let newState = document.createElement('option');
  newState.innerText = statesOfBrazil[index];
  brasilianStates.appendChild(newState);
}