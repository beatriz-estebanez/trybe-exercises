let changeBackgroundColor = document.querySelectorAll('#cor-fundo li');
let changeFontColor = document.querySelectorAll('#cor-texto li');
let changeFontSize = document.querySelectorAll('#tamanho-fonte li');
let changeHeightLine = document.querySelectorAll('#espacamento-texto li');
let changefontFamily = document.getElementsByName('fontFamily');
//console.log(changefontFamily);
//console.log(changefontFamily[0].value);

// tentar colocar tudo em 1 função
// trocar por for in

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

// altera a fonte
//document.querySelector('p').style.fontFamily = changefontFamily.values
for (let index5 = 0; index5 < changefontFamily.length; index5 += 1) {
  changefontFamily[index5].addEventListener('click', function () {
    if (changefontFamily[index5].checked === true) {
      let newFont = changefontFamily[index5].value;
      console.log(newFont);
      document.querySelector('#text').style.fontFamily = newFont;
    }
  })
}