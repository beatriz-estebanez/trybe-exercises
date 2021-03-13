let changeBackgroundColor = document.querySelectorAll('#cor-fundo li');
let changeFontColor = document.querySelectorAll('#cor-texto li');
let changeFontSize = document.querySelectorAll('#tamanho-fonte li');
let changeHeightLine = document.querySelectorAll('#espacamento-texto li');

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

// altera o espaçamento do texto
for (let index4 = 0; index4 < changeHeightLine.length; index4 += 1) {
  changeHeightLine[index4].addEventListener('click', function () {
    let newHeightLine = changeHeightLine[index4].id;
    console.log(newHeightLine);
    document.querySelector('p').style.lineHeight = newHeightLine;
  })
}