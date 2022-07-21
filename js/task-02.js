const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const unorderedList = document.querySelector("ul");

const array = [];
ingredients.forEach((ingredient) => {
  const newLi = document.createElement("li");
  newLi.textContent = ingredient;
  newLi.className = "item";
  array.push(newLi);
});

unorderedList.append(...array);

unorderedList.style.listStyle = 'none';