const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onValidInput);

function onValidInput() {
  inputEl.value.trim().length < inputEl.dataset.length ||
  inputEl.value.trim().length > inputEl.dataset.length
    ? (inputEl.classList = 'invalid')
    : (inputEl.classList = 'valid');
}
