let form = document.querySelector(".sign-up-form");
let button = document.querySelector(".sign-up-form__button");
let username = document.querySelector("#name");
let surname = document.querySelector("#surname");
let email = document.querySelector("#email");

form.addEventListener("submit", () => {
  localStorage.setItem("Name", username.value);
  localStorage.setItem("Surname", surname.value);
  localStorage.setItem("E-mail", email.value);
  if (localStorage.getItem("Name") === "Sigma") {
    congratulation();
  }
});
button.addEventListener("click", () => {});
function congratulation() {
  let congratulationsWrapper = document.querySelector(
    ".congratulations__wrapper"
  );
  congratulationsWrapper.style.display = "block";
  setTimeout(() => {
    congratulationsWrapper.style.opacity = "1";
  }, 300);
  setTimeout(() => {
    congratulationsWrapper.style.opacity = "0";
    setTimeout(() => {
      congratulationsWrapper.style.display = "none";
    }, 300);
  }, 5000);
}
