import { iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';
import { initCustomSelect } from './modules/form/init-custom-select';
import { initFormValidate } from './modules/form/init-form-validate';
import { initHeaderMenu } from './modules/init-header-menu';
import { initAccordion } from './modules/handler-accordion';
import { headerScroll } from './utils/header-scroll';

import { initSwipers } from './modules/sliders/init-sliders';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  headerScroll();

  const tabItem = document.querySelectorAll('.tab-item');
  const tabContent = document.querySelectorAll('.card-page__tab')

  tabItem.forEach((item) => {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      const id = e.target.getAttribute('href').replace('#', '')

      tabItem.forEach((child) => {
        child.classList.remove('is-active');
      });

      tabContent.forEach((child) => {
        child.classList.remove('is-active');

      });

      item.classList.add('is-active');
      document.getElementById(id).classList.add('is-active');
    })
  })





  // Modules
  // ---------------------------------
  initHeaderMenu();
  initAccordion();


  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initCustomSelect();
    initFormValidate();
    initSwipers();
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
