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
    congratulation(localStorage.getItem("Name"));
  }
});
button.addEventListener("click", () => {});
function congratulation(name) {
  let congratulationsWrapper = document.querySelector(
    ".congratulations__wrapper"
  );
  let curentDate = new Date();
  let congratulationDate = document.querySelector(".congratulations__date");
  let congratulationName = document.querySelector(".congratulations__name");
  function addZero(num) {
    if (num < 10) return "0" + num;
    else return num;
  }
  let day = addZero(curentDate.getDate());
  let month = addZero(curentDate.getMonth()+1);
  let year = curentDate.getFullYear();
  congratulationDate.innerHTML = `${day}/${month}/${year}`;
  congratulationName.innerHTML = name
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
