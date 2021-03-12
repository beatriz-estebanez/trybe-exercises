let changeColor = document.querySelectorAll('#cor-fundo li');

for (let index = 0; index < changeColor.length; index += 1) {
  changeColor[index].addEventListener('click', function () {
    let newColor = changeColor[index].id;
    console.log(newColor);
    document.querySelector('body').style.backgroundColor = newColor;
  })
}
