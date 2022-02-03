const inputFontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
inputFontSize.addEventListener('input', changeFontSize);

function changeFontSize(){
    text.style.fontSize = `${inputFontSize.value}px`;
}