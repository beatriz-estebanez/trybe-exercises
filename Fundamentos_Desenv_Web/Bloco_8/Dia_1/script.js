const personInfo = (nome) => {
  let email = nome.split(' ').join('_').toLowerCase();
  return { nomeCompleto: nome, email: `${email}@trybe.com` };
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: callback('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: callback('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

console.log(newEmployees(personInfo));
