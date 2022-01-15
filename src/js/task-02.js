const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsRef = document.querySelector("ul#ingredients");

const listRef = ingredients.forEach((ingredients) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = ingredients;
  itemRef.classList.add("item");
  ingredientsRef.append(itemRef);
});

console.log(ingredientsRef);