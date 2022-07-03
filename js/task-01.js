const NumberOfCategories = document.querySelectorAll(".item");
const message = `Number of categories: ${NumberOfCategories.length}`;
console.log(message);

const array = document.querySelectorAll(".item");
for (const list of array) {
  console.log(`Category: ${list.firstElementChild.innerHTML}`);
  console.log(
    `Elements: ${list.lastElementChild.querySelectorAll("li").length}`
  );
}
