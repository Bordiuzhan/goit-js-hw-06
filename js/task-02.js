const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elementsMainEl = document.querySelector('#ingredients');
ingredients.map((ingredient) => {
  const elementOfIng = document.createElement('li');
  elementOfIng.textContent = ingredient;
  elementOfIng.classList.add('item');
  elementsMainEl.prepend(elementOfIng);
});
