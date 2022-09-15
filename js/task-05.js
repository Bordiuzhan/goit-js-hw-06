const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onChangeInput);

function onChangeInput(event) {
  outputEl.textContent = event.currentTarget.value;
}
