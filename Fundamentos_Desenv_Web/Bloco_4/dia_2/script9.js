let array = [];

for (let index = 0 ; index < 25 ; index += 1) {
  array.push(index+1);
}

for (let index2 = 0 ; index2 < 25 ; index2 += 1) {
  console.log(array[index2] / 2);
}
