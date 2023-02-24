window.clothesSlider = () => {

  if (!document.querySelector('.clothes-slider-block')) {
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
    spaceBetween: 45,
    slidesPerGroup: 2,
    slidesPerView: 4,
    navigation: {
      nextEl: '.clothes-slider__button-next',
      prevEl: '.clothes-slider__button-prev',
    },
  });
}

export default { clothesSlider }
