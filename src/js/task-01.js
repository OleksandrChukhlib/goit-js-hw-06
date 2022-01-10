
const allCategoriesEl = document.querySelectorAll('ul#categories li.item');
const numberOfCategoriesEl = allCategoriesEl.length;
console.log(`Number of categories: ${numberOfCategoriesEl}`);

for (let i = 0; i < numberOfCategoriesEl; i += 1) {
const headerTextEl = allCategoriesEl[i].firstElementChild.textContent;
console.log(`Category: ${headerTextEl}`);

const elementsEl = allCategoriesEl[i].lastElementChild;
const numberOfElementsEl  = elementsEl.querySelectorAll('li');
console.log(`Elements: ${numberOfElementsEl.length}`);
}


