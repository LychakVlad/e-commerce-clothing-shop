const menuButton = document.querySelectorAll('.nav-menu-open');
const burgerIcon = document.querySelector('.header-menu-open');
const selectBody = document.querySelector('body');



const initHeaderMenu = () => {
  if (!menuButton) {
    return;
  }

  const handler = (evt) => {
    const item = evt.target
    const menuItem = item.closest('.nav-menu-open');

    const headerMenu = menuItem.lastElementChild
    const headerLink = menuItem.firstElementChild

    headerMenu.classList.toggle('is-active');

    if (headerMenu.classList.contains('is-active')) {
      headerLink.classList.add('is-active');
    } else {
      headerLink.classList.remove('is-active');

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
