const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onValidInput);

function onValidInput() {
  if (inputEl.value.trim().length < inputEl.dataset.length) {
    inputEl.classList.add('invalid');
  } else {
    inputEl.classList.add('valid'), inputEl.classList.remove('invalid');
  }
}
