let elements = document.querySelectorAll(".latest-news__item");
window.addEventListener("scroll", () => {
  let windowScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  let distanceFromTop = elements[0].offsetTop;
  if (windowScroll + window.innerHeight >= distanceFromTop) {
    for (let i = 0; i < elements.length; i++) {
      setTimeout(() => {
        elements[i].classList.add("latest-news__item--show");
      }, 500 * (i + 1));
    }
  } else if (windowScroll + window.innerHeight < distanceFromTop) {
    elements.forEach((el) => {
      el.classList.remove("latest-news__item--show");
    });
  }
});
