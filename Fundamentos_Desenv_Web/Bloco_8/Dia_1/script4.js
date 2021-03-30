const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkPoints = (correctAns, studentAns) => {
  totalPoints = 0;
  for (let index in correctAns) {
    if (studentAns[index] !== 'N.A') {
      if (correctAns[index] === studentAns[index]) {
        totalPoints += 1;
      } else {
        totalPoints -= 0.5;
      }
    }
  }
  return totalPoints;
}

const checkAnswers = (correctAnswers, userAnswers, callback) => {
  return `Resultado final: ${callback(correctAnswers, userAnswers)} pontos.`;
}

console.log(checkAnswers(rightAnswers, studentAnswers, checkPoints));