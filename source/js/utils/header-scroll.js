const header = document.querySelector('.header');
if (header) {
  const headerHeight = header.getBoundingClientRect().height;
  document.documentElement.style.setProperty('--header-height', headerHeight + 'px');
}

const headerScroll = () => {
  if (!header) {
    return;
  }

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    const mainBlock = document.querySelector('main')
    const mainPage = document.documentElement;
    const headerHeight = header.offsetHeight;
    const firstBlock = mainPage.clientHeight;

    if (scrollDistance >= firstBlock + headerHeight) {
      header.classList.add('is-fixed');
      mainBlock.style.marginTop = `${headerHeight}px`;
    } else {
      header.classList.remove('is-fixed');
      mainBlock.style.marginTop = null;
    }

    if (scrollDistance >= headerHeight) {
      header.classList.add('is-hidden');
      mainBlock.style.marginTop = '69px';
    } else {
      header.classList.remove('is-hidden');
      mainBlock.style.marginTop = null;
    }
  });
};

export { headerScroll }
