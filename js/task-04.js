let counterValue = 0;
const span = document.querySelector("#value");

const buttonUp = document.querySelector("[data-action='increment']");
const buttonDown = document.querySelector("[data-action='decrement']");

const up = () => {
  counterValue += 1;
  span.textContent = counterValue;
};

const down = () => {
  counterValue -= 1;
  span.textContent = counterValue;
};

buttonUp.addEventListener("click", up);
buttonDown.addEventListener("click", down);
