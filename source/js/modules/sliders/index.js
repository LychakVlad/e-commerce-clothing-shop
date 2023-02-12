window.initMainSwiper = () => {
  if (!document.querySelector('.main-slider')) {
    return;
  }

  const mainSwiper = new Swiper('.main-slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
      },
    },
    autoHeight: true,
  });
}


window.initClothesSwiper = () => {
  if (!document.querySelector('.main-slider')) {
    return;
  }
  const clothesSwiper = new Swiper('.clothes-slider-block', {
    breakpoints: {
      800: {
        slidesPerView: 4,
      },
      570: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 2,
      },
    },
    loop: true,
    spaceBetween: 45,
    slidesPerGroup: 2,
    slidesPerView: 4,
    navigation: {
      nextEl: '.clothes-slider__button-next',
      prevEl: '.clothes-slider__button-prev',
    },
  });
}
