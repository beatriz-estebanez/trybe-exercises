let ang1 = 90, ang2 = 80, ang3= 10;


if (ang1 <= 0 || ang2 <= 0 || ang3 <= 0) {
  console.log("Ângulo inválido!")
} else if (ang1 + ang2 + ang3 == 180) {
  console.log(true);
} else {
  console.log(false);
}