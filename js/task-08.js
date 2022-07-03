const form = document.querySelector(".login-form");
const formReset = document.querySelector(".login-form").reset();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  const info = `Email: ${email.value}, Password: ${password.value}.`;

  if (email.value === "" || password.value === "") {
    alert("All fields must be filled");
  } else {
    console.log(info);
    form.reset();
  }
});
