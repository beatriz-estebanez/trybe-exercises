const resultDivision = (sum) => {
  return [2, 3, 5, 10].map((number) => sum / number);
} // ideia retirada do gabarito do course

const calcSum = () => {
  const array = [];

  for (let index = 0; index < 10; index += 1) {
    array.push(Math.pow(Math.floor(Math.random() * 50), 2));
  }
  const soma = array.reduce((acc, crr) => acc + crr, 0);
  console.log(soma);
  return soma;
}

const promise = async () => {
  try {
    const sum = await calcSum();
    if (sum < 8000) {
      const newArray = await resultDivision(sum);
      console.log(newArray.reduce((acc, crr) => acc + crr, 0));
    } else {
      throw new Error('É mais de oito mil! Essa promise deve estar quebrada!');
    }
  } catch (error) {
    console.log(error);
  }
}

promise();