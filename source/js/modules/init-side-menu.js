const initSideMenu = () => {

  if (!document.querySelector('.catalog__filters-icon')) {
    return;
  }

  const openSideIcon = document.querySelector('.catalog__filters-icon');
  const closeSideIcon = document.querySelector('.catalog-side__close-icon');
  const catalogSideMenu = document.querySelector('.catalog-side');
  const selectBody = document.querySelector('body');

  openSideIcon.addEventListener('click', () => {
    catalogSideMenu.classList.add('is-active');
    selectBody.classList.add('scroll-lock');
  })

  closeSideIcon.addEventListener('click', () => {
    catalogSideMenu.classList.remove('is-active');
    selectBody.classList.remove('scroll-lock');
  })
}

export { initSideMenu }
