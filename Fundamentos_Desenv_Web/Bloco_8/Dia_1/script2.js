const checkNumbers = (numApostado, numSorteado) => {
  return (numApostado === numSorteado) ? 'Parabéns você ganhou!' : 'Tente novamente';
}

const sorteio = (chosenNumber, callback) => {
  const drawnNumber = Math.ceil(Math.random() * 5);
//  console.log(drawnNumber);
  return callback(chosenNumber, drawnNumber);
}

console.log(sorteio(5, checkNumbers));