const counterEl = document.querySelector('#counter');
const arrButtons = counterEl.querySelectorAll('#counter button');
const decrementEl = arrButtons[0];
const incrementEl = arrButtons[1];
const valueEl = counterEl.querySelector('#value');
let counterValue = 0;
function onIncButtonClick() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
function onDecrButtonClick() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
incrementEl.addEventListener('click', onIncButtonClick);
decrementEl.addEventListener('click', onDecrButtonClick);
