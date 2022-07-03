const numberOfLetters = document.querySelector("#validation-input");

const validator = () => {
  if (numberOfLetters.dataset.length == numberOfLetters.value.length) {
    numberOfLetters.classList.add("valid");
    numberOfLetters.classList.replace("invalid", "valid");
  } else {
    numberOfLetters.classList.add("invalid");
    numberOfLetters.classList.replace("valid", "invalid");
  }
};

numberOfLetters.addEventListener("blur", validator);
