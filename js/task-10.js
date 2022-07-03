function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const div = document.querySelector("#boxes");

function createBoxes(amount) {
  amount = input.value;

  for (let i = 0; i < amount; i += 1) {
    const value = document.createElement("div");
    div.append(value);
    value.style.backgroundColor = getRandomHexColor();
    value.style.height = 30 + i * 10 + "px";
    value.style.width = 30 + i * 10 + "px";
  }
}

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", () => {
  for (let i = 0; i <= 100; i += 1) {
    div.firstChild.remove();
  }
});
