

const handlerAccordion = (event) => {
  const item = event.target;
  const parent = item.closest('[data-accordion="parent"]');
  const accordionContent = parent.querySelector('[data-accordion="content"]');

  if (parent.classList.contains('is-active')) {
    parent.classList.remove('is-active');
    accordionContent.style.maxHeight = null;
  } else {
    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    parent.classList.add('is-active');
  }
};

const initAccordion = () => {
  if (!document.querySelectorAll('[data-accordion="button"]')) {
    return;
  }

  document.querySelectorAll('[data-accordion="button"]')
    .forEach((item) => {
      item.addEventListener('click', handlerAccordion);
    });
};


export { initAccordion };
