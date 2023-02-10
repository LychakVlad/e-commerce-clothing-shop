const menuButton = document.querySelectorAll('.nav-menu-open');
const headerMenu = document.querySelector('.header-menu');
const burgerIcon = document.querySelector('.header-menu-open');

const initHeaderMenu = () => {
  if (!headerMenu) {
    return;
  }

  menuButton.forEach((item) => {
    item.addEventListener('mouseenter', function (e) {
      headerMenu.classList.toggle('is-active');
    });
  });

  headerMenu.addEventListener('mouseleave', () => {
    headerMenu.classList.toggle('is-active');
  })

  burgerIcon.addEventListener('click', () => {
    headerMenu.classList.toggle('is-active');
    burgerIcon.classList.toggle('is-active');
  })
};

export { initHeaderMenu };
