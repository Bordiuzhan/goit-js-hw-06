const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onChangeInput);

function onChangeInput(event) {
  inputEl.value.trim() === ''
    ? (outputEl.textContent = 'Anonymous')
    : (outputEl.textContent = inputEl.value.trim());
}
