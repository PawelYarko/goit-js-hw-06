const buttonChaneColor = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
const body = document.querySelector('body');

buttonChaneColor.addEventListener('click', onButtonChangeColorClick);

function onButtonChangeColorClick(){
  body.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
