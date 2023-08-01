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
  username.value = "";
  surname.value = "";
  email.value = "";
  [surname, username, email].forEach(()=>{removeEventListener("input",()=>{})});
});
button.addEventListener("click", ()=>{
  checkValidity();
  [surname, username, email].forEach((el) => {
    el.addEventListener("input", () => {
      checkValidity();
    });
  });
});
function checkValidity() {
  if (username.validity.patternMismatch) {
    username.setCustomValidity(
      "Введіть ваше ім'я з великої літери, всі інші літери малі, \n без пробілів, використовуючи тільки латинські літери!"
    );
    username.classList.add("sign-up-form__input--invalid");
  } else {
    username.setCustomValidity("");
    username.classList.remove("sign-up-form__input--invalid");
  }
  if (surname.validity.patternMismatch) {
    surname.setCustomValidity(
      "Введіть ваше прізвище з великої літери, без пробілів, \n використовуючи тільки латинські літери!"
    );
    surname.classList.add("sign-up-form__input--invalid");
  } else {
    surname.setCustomValidity("");
    surname.classList.remove("sign-up-form__input--invalid");
  }
  if (email.validity.typeMismatch) {
    email.classList.add("sign-up-form__input--invalid");
  } else {
    email.setCustomValidity("");
    email.classList.remove("sign-up-form__input--invalid");
  }
}
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
  let month = addZero(curentDate.getMonth() + 1);
  let year = curentDate.getFullYear();
  congratulationDate.innerHTML = `${day}/${month}/${year}`;
  congratulationName.innerHTML = name;
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
