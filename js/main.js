const swiper = new Swiper(".swiper", {
  observer: true,
  observeParents: true,
  slidesPerView: 2,
  slidesPerGroup: 2,
  loop: true,
  //spaceBetween: 80,
  // Navigation arrows
  navigation: {
    nextEl: ".testimonials-slider__next-btn",
    prevEl: ".testimonials-slider__prev-btn",
  },
});
