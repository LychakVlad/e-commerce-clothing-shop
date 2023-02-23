const menuButton = document.querySelectorAll('.nav-menu-open');
const headerMenu = document.querySelector('.header-menu');
const burgerIcon = document.querySelector('.header-menu-open');
const selectBody = document.querySelector('body');
const headerLink = document.querySelector('header-nav__link');

const initHeaderMenu = () => {
  if (!headerMenu) {
    return;
  }

  menuButton.forEach((item) => {
    item.addEventListener('mouseenter', function (e) {
      headerMenu.classList.toggle('is-active');
    });

    item.addEventListener('mouseleave', function (e) {
      headerMenu.classList.toggle('is-active');
    });

    if (headerMenu.classList.contains('is-active') {
      headerLink.classList.toggle('is-active');
    })
});


burgerIcon.addEventListener('click', () => {
  headerMenu.classList.toggle('is-active');
  burgerIcon.classList.toggle('is-active');
  selectBody.classList.toggle('scroll-lock');

});
};

export { initHeaderMenu };
