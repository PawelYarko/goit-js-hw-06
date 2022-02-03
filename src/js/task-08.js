const form = document.querySelector('.login-form');
const inputEmail = document.querySelector('input[type="email"');
const inputPas = document.querySelector('input[type="password"');
const buttonSubmit = document.querySelector('button[type="submit"]')

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e){
    e.preventDefault();
    const userData = {};
    userData.email = inputEmail.value;
    userData.password = inputPas.value;

    
        if(inputEmail.value === "" || inputPas.value === ""){
            return window.alert(`Пожалуйста заполните все поля для ввода`);
        }
        console.log(userData);
        e.currentTarget.reset();

}