const inputValue = document.querySelector('input[type="number"]');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxesElem = document.querySelector('#boxes');

buttonCreate.addEventListener('click', onButtonCreateClick);
buttonDestroy.addEventListener('click', onButtonDestroyClick);

let startWidth = 20;
let starHeight = 20;


const boxes = [];      



function createElement(boxes){
  return boxes.map(box => `
  <div class="box" 
  style="background-color: ${box.hex};
   height:${box.height}px; 
   width:${box.width}px;"></div>
  `).join('');
}


function onButtonCreateClick(){
  console.log(inputValue.value);
  for(let i = 0; i < inputValue.value; i+=1){                                   //   inputValue.value
    startWidth +=10;
    starHeight +=10;
    console.log('width:',startWidth);
    console.log('height:',starHeight);
    boxes.push({width: startWidth, height: starHeight, hex: getRandomHexColor()});                                             
    console.log(boxes);
  }
  
  const createBlocks = createElement(boxes);
  boxesElem.innerHTML = createBlocks;
}



function onButtonDestroyClick(){
  boxesElem.remove();
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
