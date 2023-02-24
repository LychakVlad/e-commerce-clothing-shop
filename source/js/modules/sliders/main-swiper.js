window.mainSlider = () => {

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


export default { mainSlider }
