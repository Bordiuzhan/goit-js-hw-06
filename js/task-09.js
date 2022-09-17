function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const btnChangeColorEl = document.querySelector('.change-color');
const colorTextEl = document.querySelector('.color');

btnChangeColorEl.addEventListener('click', onBtn);

function onBtn() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorTextEl.textContent = color;
}
