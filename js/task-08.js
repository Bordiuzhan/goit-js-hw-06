const formEl = document.querySelector('.login-form');
console.dir(formEl);

formEl.addEventListener('submit', onLoginBtn);

function onLoginBtn(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value.trim().length < 1 || password.value.trim().length < 1) {
    alert('Всі поля повинні бути заповнені');
  }
  const dataForm = {
    email: email.value,
    password: password.value,
  };
  console.log(dataForm);
}
