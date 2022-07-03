const snail = document.querySelector("#font-size-control");
const textAbra = document.querySelector("#text");
const generator = () => {
  textAbra.style.fontSize = `${snail.value}` + "px";
};

snail.addEventListener("input", generator);
