const hydrate = (drinks) => {

    const totalDrinks = drinks.split(/, | e /).reduce((acc, crr) =>
      acc + parseInt(crr[0] + crr[1]), 0);
    
    return totalDrinks > 1 ? `${totalDrinks} copos de água` : `${totalDrinks} copo de água`;
};

console.log(hydrate('1 cerveja'));

module.exports = hydrate;