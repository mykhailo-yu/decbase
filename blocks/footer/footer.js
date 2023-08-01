const span = document.querySelector(".footer__rights-year");
const date = new Date();
const year = date.getFullYear();
span.innerHTML = year;