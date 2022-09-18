function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controlsEl = document.querySelector('#controls');
const inputNumberEL = document.querySelector('input');
const btnCreateEl = document.querySelector('[data-create]');
const btnResetEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');
let elementsString = '';

inputNumberEL.addEventListener('input', onValue);
btnCreateEl.addEventListener('click', onCreateBtn);
btnResetEl.addEventListener('click', destroyBoxes);

function onValue() {
  let amount = inputNumberEL.value;
  createBoxes(amount);
}
function createBoxes(amount) {
  let value = 30;
  elementsString = '';
  for (let i = 0; i < amount; i += 1) {
    elementsString += `<div style="background-color: ${getRandomHexColor()}; width: ${value}px; height:  ${value}px"></div>`;
    value += 10;
  }
}
function onCreateBtn() {
  boxesEl.insertAdjacentHTML('afterbegin', elementsString);
  inputNumberEL.value = '';
}
function destroyBoxes() {
  boxesEl.innerHTML = '';
}
