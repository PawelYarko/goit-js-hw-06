const input = document.querySelector('#validation-input');

input.addEventListener('input', onInputWrite);
const maxLengthOfInput =  input.dataset.length;

function onInputWrite(e){
    if(e.currentTarget.value.length === Number(maxLengthOfInput)){
        input.classList.remove('invalid');
        input.classList.add('valid');

    }
    else{
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
    
}