const valueCounterElement = document.querySelector('#value');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');


let valueCounter = 0;

buttonDecrement.addEventListener('click', decrement);
buttonIncrement.addEventListener('click', increment);

function decrement(){
    valueCounter -=1;
    valueCounterElement.textContent = valueCounter;
    console.log(valueCounter);
}

function increment(){
    valueCounter +=1;
    valueCounterElement.textContent = valueCounter;
    console.log(valueCounter); 
}