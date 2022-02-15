const swiper = new Swiper(".portofolio__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    376: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
