const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const unorderedList = document.querySelector("ul");

const markup = ingredients.reduce(
  (acc, ingredient) => acc + `<li class="list-item">${ingredient}</li>`,
  ""
);
unorderedList.innerHTML = markup;
