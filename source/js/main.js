import { iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';
import { initCustomSelect } from './modules/form/init-custom-select';
import { initFormValidate } from './modules/form/init-form-validate';

import { initHeaderMenu } from './modules/header-menu';

import './modules/sliders/index';



// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  const handlerAccordion = (event) => {
    const item = event.target;
    const parent = item.closest('[data-accordion="parent"]');
    const accordionContent = parent.querySelector('[data-accordion="content"]');

    if (parent.classList.contains('is-active')) {
      parent.classList.remove('is-active');
      accordionContent.style.maxHeight = null;
    } else {
      document
          .querySelectorAll('.faq-accordion-item')
          .forEach((child) => child.classList.remove('is-active'))
      document
          .querySelectorAll('.faq-accordion-item__answer')
          .forEach((child) => child.style.maxHeight = null)

      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
      parent.classList.add('is-active')
    }
  }


  document.querySelectorAll('[data-accordion="button"]')
      .forEach((item) => {
        item.addEventListener('click', handlerAccordion);
      });




  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initCustomSelect();
    initFormValidate();
    window.initMainSwiper();
    window.initClothesSwiper();

    initHeaderMenu();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
