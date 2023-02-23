const menuButton = document.querySelectorAll('.nav-menu-open');
const burgerIcon = document.querySelector('.header-menu-open');
const selectBody = document.querySelector('body');



const initHeaderMenu = () => {
  if (!menuButton) {
    return;
  }

  const handler = (evt) => {
    const target = evt.target
    const menuItem = evt.target.closest('.nav-menu-open');

    const headerMenu = menuItem.lastElementChild
    const headerLink = menuItem.firstElementChild
    const headerLINK = document.querySelectorAll('.header-nav__link')

    headerMenu.classList.toggle('is-active');

    if (headerMenu.classList.contains('is-active')) {
      headerLink.classList.add('is-active');
      headerLINK.forEach((item) => {
        item.classList.add('is-disabled')
      });
    } else {
      headerLink.classList.remove('is-active');
      headerLINK.forEach((item) => {
        item.classList.remove('is-disabled')
      });
    }

  }



  menuButton.forEach((item) => {
    item.addEventListener('mouseenter', handler);
    item.addEventListener('mouseleave', handler);
  });



  burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('is-active');
    selectBody.classList.toggle('scroll-lock');

  });
};

export { initHeaderMenu };
