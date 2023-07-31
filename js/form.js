let submit = document.querySelector(".sign-up-form");
submit.addEventListener("submit", () => {
  let username = document.querySelector("#name").value;
  let surname = document.querySelector("#surname").value;
  let email = document.querySelector("#email").value;
  localStorage.setItem("Name", username);
  localStorage.setItem("Surname", surname);
  localStorage.setItem("E-mail", email);
});
