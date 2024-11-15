let swiper;

function initSwiper() {
  // Проверяем, если ширина экрана меньше или равна 767px
  if (window.matchMedia("(max-width: 767px)").matches) {
    // Если Swiper еще не инициализирован, создаем его
    if (!swiper) {
      swiper = new Swiper('.swiper', {
        centeredSlides: true,
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1.3,
        spaceBetween: 10,
        centerInsufficientSlides: true,
      });
    }
  } else {
    // Если ширина больше 767px и Swiper был инициализирован, уничтожаем его
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  }
}

// Запускаем функцию при загрузке страницы
initSwiper();

// Следим за изменением ширины окна и вызываем функцию
window.addEventListener('resize', initSwiper);