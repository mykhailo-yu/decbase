const swiper = new Swiper(".swiper", {
  observer: true,
  observeParents: true,
  slidesPerView: 2,
  slidesPerGroup: 2,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 5,
      slidesPerGroup: 1,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".testimonials-slider__next-btn",
    prevEl: ".testimonials-slider__prev-btn",
  },
});
