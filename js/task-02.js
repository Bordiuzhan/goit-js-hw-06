const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elementsMainEl = document.querySelector('#ingredients');

const newIngredients = ingredients.map((ingredient) => {
  let elementOfIng = document.createElement('li');
  elementOfIng.classList.add('item');
  elementOfIng.textContent = ingredient;
  console.log(elementOfIng.textContent);
  return elementOfIng;
});
elementsMainEl.prepend(...newIngredients);
