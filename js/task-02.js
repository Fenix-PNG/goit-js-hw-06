const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const unorderedList = document.querySelector("#ingredients");
for (const elements of ingredients) {
  const ingredient = document.createElement("li");
  ingredient.textContent = elements;
  ingredient.classList.add("item");
  unorderedList.append(ingredient);
  console.log(ingredient);
}
