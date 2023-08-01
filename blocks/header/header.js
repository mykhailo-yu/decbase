const navWrapper = document.querySelector(".mob-nav__wrapper");
const nav = document.querySelector("#mob-nav");
const menuToggle = document.querySelector(".header__menu-toggle");
const closeBtn = document.querySelector(".mob-nav__close-btn");
const links = document.querySelectorAll(".mob-nav__link");
menuToggle.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);
links.forEach((el)=>{
    el.addEventListener("click", ()=>{
        closeNav();
    })
})
navWrapper.addEventListener("click", (event) => {
  let isClickInsideMenu = nav.contains(event.target);
    if (!isClickInsideMenu) {
      closeNav();
    }
});
function openNav() {
  nav.parentElement.style.display = "block";
  setTimeout(() => {
    nav.parentElement.style.opacity = "1";
    nav.style.width = "40vw";
  }, 200);
}
function closeNav() {
  nav.style.width = "0";
  nav.parentElement.style.opacity = "0";
  setTimeout(() => {
    nav.parentElement.style.display = "none";
  }, 300);
}
