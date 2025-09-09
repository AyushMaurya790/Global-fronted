// group-departures Card
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.mySwiper').forEach(function(swiperEl) {
    const groupTourSwiper = new Swiper(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: swiperEl.querySelector('.swiper-pagination'),
        clickable: true,
      },    
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      },
      navigation: {
        nextEl: swiperEl.querySelector('.swiper-button-next'),
        prevEl: swiperEl.querySelector('.swiper-button-prev'),
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
      watchSlidesProgress: true,
      grabCursor: true,
    });

    // Pause autoplay on mouseenter, resume on mouseleave for each slider
    swiperEl.addEventListener('mouseenter', function () {
      groupTourSwiper.autoplay.stop();
    });
    swiperEl.addEventListener('mouseleave', function () {
      groupTourSwiper.autoplay.start();
    });
  });
});
