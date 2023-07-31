const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 100,
  // Navigation arrows
  navigation: {
    nextEl: ".testimonials-slider__next-btn",
    prevEl: ".testimonials-slider__prev-btn",
  },
});
