const mainListEl = document.querySelector('#categories');
const numberOfList = mainListEl.children.length;
console.log(`Number of categories: ${numberOfList}`);

const elementsOfList = mainListEl.children;
for (const element of elementsOfList) {
  console.log(element.childNodes[1].textContent);
  console.log(`Elements: ${element.childNodes[3].children.length}`);
}
