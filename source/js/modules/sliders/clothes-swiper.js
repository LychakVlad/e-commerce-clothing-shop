window.clothesSlider = () => {

  if (!document.querySelector('.clothes-slider-block')) {
    return;
  }

  const clothesSwiper = new Swiper('.clothes-slider-block', {
    breakpoints: {
      1000: {
        slidesPerView: 4,

      },
      800: {
        spaceBetween: 36,
        slidesPerView: 3,
      },
      440: {
        spaceBetween: 24,
        slidesPerView: 2,
      },
      320: {
        slidesPerGroup: 1,
        slidesPerView: 1,
      },
    },
    spaceBetween: 44,
    slidesPerGroup: 2,
    navigation: {
      nextEl: '.clothes-slider__button-next',
      prevEl: '.clothes-slider__button-prev',
    },
  });
}

export default { clothesSlider }
