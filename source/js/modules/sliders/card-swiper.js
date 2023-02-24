window.cardSlider = () => {

  if (!document.querySelector('.card-slider')) {
    return;
  }

  const cardSwiper = new Swiper('.card-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    thumbs: {
      swiper: {
        el: '.card-slider-mini',
        slidesPerView: 5,
        direction: 'vertical',
      }
    },
  });
}

export default { cardSlider }
