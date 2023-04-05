var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });