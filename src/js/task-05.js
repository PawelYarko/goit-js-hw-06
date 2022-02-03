const input = document.querySelector('#name-input');
const spanOfUserInput = document.querySelector('#name-output');
input.addEventListener('input' , inputOnClick);

function inputOnClick(){
    spanOfUserInput.textContent = input.value;
    if(input.value === ''){
        spanOfUserInput.textContent = 'Anonymous';
    }
}