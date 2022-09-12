const counterEl = document.querySelector('#counter');
const arrButtons = counterEl.querySelectorAll('#counter button');
const decrement = arrButtons[0];
const increment = arrButtons[1];
const value = counterEl.querySelector('#value');
let counterValue = 0;
function onIncButtonClick() {
  counterValue += 1;
  value.textContent = counterValue;
}
function onDecrButtonClick() {
  counterValue -= 1;
  value.textContent = counterValue;
}
increment.addEventListener('click', onIncButtonClick);
decrement.addEventListener('click', onDecrButtonClick);
