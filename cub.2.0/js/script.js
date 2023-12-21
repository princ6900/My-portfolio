document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 2,
        spaceBetween: 20,
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints: {
          772: {
            slidesPerView: 4,
            spaceBetween: 40,
          }
        }
      });
 }, false);
 