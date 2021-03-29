// Sugestão de respostas a serem validadas.
const correctAnswer = 'beatriz Estebanez';
const userAnswer = 'BEATRIZ Estebanez';

const checkAnswer = (correctAns) => (currentAnswer) => {
  return correctAns.toLowerCase() === currentAnswer.toLowerCase() ? true : false;
} 

console.log(checkAnswer(correctAnswer)(userAnswer));
