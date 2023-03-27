const cardsHandler = () => {
  if (!document.querySelector('[data-card="wrapper"]')) {
    return;
  }

  const closeButton = document.querySelectorAll('[data-card="button-close"]');
  const cardItem = document.querySelectorAll('[data-card="card"]');
  const cardsBlock = document.querySelector('[data-card="container"]');
  const emptyPage = document.querySelector('.empty-page');
  const favWrapper = document.querySelector('[data-card="wrapper"]');

  closeButton.forEach((item) => {
    item.onclick = function (e) {
      const current = e.target;
      const parent = current.closest('[data-card="card"]');
      cardItem.forEach(() => {
        parent.remove();
      });
      if (cardsBlock.innerText === '') {
        emptyPage.classList.add('is-active');
        favWrapper.classList.add('is-hidden');
      }

    };
  });
};


export { cardsHandler };
