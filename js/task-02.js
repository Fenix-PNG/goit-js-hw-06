const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const unorderedList = document.querySelector("#ingredients");
const markup = ingredients
  .map((ingredient) => `<li class="list-item">${ingredient}</li>`)
  .join("");
unorderedList.innerHTML = markup;
