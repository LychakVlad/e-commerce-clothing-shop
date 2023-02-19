const header = document.querySelector('.header');

const headerScroll = () => {
  if (!header) {
    return;
  }

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    const mainPage = document.querySelector('main');
    const firstBlock = mainPage.firstElementChild;
    const headerHeight = header.offsetHeight;
    const firstBlockHeight = firstBlock.offsetHeight;

    if (scrollDistance >= firstBlockHeight + headerHeight) {
      header.classList.add('is-fixed');
      firstBlock.style.marginTop = `${headerHeight}px`;
    } else {
      header.classList.remove('is-fixed');
      firstBlock.style.marginTop = null;
    }

    if (scrollDistance >= headerHeight) {
      header.classList.add('is-hidden')
      firstBlock.style.marginTop = '69px';
    } else {
      header.classList.remove('is-hidden');
      firstBlock.style.marginTop = null;
    }
  });
};

export { headerScroll }
