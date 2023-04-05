const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    //pagination: {
      //el: '.swiper-pagination',
    //},
  
    // Navigation arrows
    navigation: {
      nextEl: '.carousel-button-next',
      prevEl: '.carousel-button-prev',
    },
  
    // And if we need scrollbar
    //scrollbar: {
     // el: '.swiper-scrollbar',
   // },
    spaceBetween: 20,
    breakpoints: {
        1344: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
  });