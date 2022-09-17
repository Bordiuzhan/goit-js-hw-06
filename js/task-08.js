const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onLoginBtn);

function onLoginBtn(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  let dataForm = {};

  email.value.trim().length < 1 || password.value.trim().length < 1
    ? alert('Всі поля повинні бути заповнені')
    : (dataForm = { email: email.value, password: password.value });

  console.log(dataForm);
  formEl.reset();
}
