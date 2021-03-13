let changeBackgroundColor = document.querySelectorAll('#cor-fundo li');
let changeFontColor = document.querySelectorAll('#cor-texto li');
let changeFontSize = document.querySelectorAll('#tamanho-fonte li');

// altera cor de fundo
for (let index = 0; index < changeBackgroundColor.length; index += 1) {
  changeBackgroundColor[index].addEventListener('click', function () {
    let newColor = changeBackgroundColor[index].id;
    console.log(newColor);
    document.querySelector('body').style.backgroundColor = newColor;
  })
}

// altera cor da fonte
for (let index2 = 0; index2 < changeFontColor.length; index2 += 1) {
  changeFontColor[index2].addEventListener('click', function () {
    let newFontColor = changeFontColor[index2].id;
    console.log(newFontColor);
    document.querySelector('body').style.color = newFontColor;
  })
}

// altera tamanho da fonte
for (let index3 = 0; index3 < changeFontSize.length; index3 += 1) {
  changeFontSize[index3].addEventListener('click', function () {
    let newFontSize = changeFontSize[index3].id;
    console.log(newFontSize);
    document.querySelector('p').style.fontSize = newFontSize;
  })
}