const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onChangeInput);

function onChangeInput(event) {
  if (inputEl.value.trim().length !== 0) {
    outputEl.textContent = event.currentTarget.value;
  }
}
