const rangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
rangeEl.value = rangeEl.min;

rangeEl.addEventListener('input', onRangeMuve);
console.dir(rangeEl.min);

function onRangeMuve(event) {
  textEl.style.fontSize = rangeEl.value + 'px';
}
