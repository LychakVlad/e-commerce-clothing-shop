import { iosVhFix } from './utils/ios-vh-fix';
import { headerScroll } from './utils/header-scroll';

import { initModals } from './modules/modals/init-modals';
import { initCustomSelect } from './modules/form/init-custom-select';
import { initFormValidate } from './modules/form/init-form-validate';
import { initHeaderMenu } from './modules/init-header-menu';
import { initAccordion } from './modules/handler-accordion';
import { initTabs } from './modules/handler-tabs';


import { initSwipers } from './modules/sliders/init-sliders';
import { initSideMenu } from './modules/init-side-menu';
import { paymentMethodCheck } from './modules/form/init-payment-method';
import { cardsHandler } from './modules/handler-cards';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  headerScroll();

  // Modules
  // ---------------------------------
  initHeaderMenu();
  initAccordion();
  initTabs();



  const cartCardsHandler = () => {
    if (!document.querySelector('.cart')) {
      return;
    }


    const counterPlus = document.querySelectorAll('.counter-plus');
    const counterMinus = document.querySelector('.counter-minus');

    const oldPrices = document.querySelector('.item-card__old-price');
    const totalPrice = document.querySelector('.cart__total-price');
    const itemPrices = document.querySelector('.item-card__price');

    const counter = document.querySelector('.counter-digit');

    let calculationPrice = itemPrices.innerHTML.replace(/[^+\d]/g, '');
    let calculationOldPrice = oldPrices.innerHTML.replace(/[^+\d]/g, '');
    let calculationTotalPrice = totalPrice.innerHTML.replace(/[^+\d]/g, '');

    counterPlus.forEach((item) => {
      item.onclick = function (e) {
        e.preventDefault();
        let countPlus = counter.innerHTML;
        if (+countPlus <= 9) {
          counter.innerHTML++;
          countPlus = counter.innerHTML;
          totalPrice.innerHTML = 'TOTAL : ' + ((+countPlus) * (+calculationTotalPrice)) + ' UAH';
          oldPrices.innerHTML = ((+countPlus) * (+calculationOldPrice)) + ' UAH';
          itemPrices.innerHTML = ((+countPlus) * (+calculationPrice)) + ' UAH';
        }
      };
    });


    counterMinus.forEach((item) => {

      item.onclick = function (e) {
        e.preventDefault();
        let countMinus = counter.innerHTML;
        if (+countMinus >= 2) {
          counter.innerHTML--;
          countMinus = counter.innerHTML;
          totalPrice.innerHTML = 'TOTAL : ' + ((+countMinus) * (+calculationTotalPrice)) + ' UAH';
          oldPrices.innerHTML = ((+countMinus) * (+calculationOldPrice)) + ' UAH';
          itemPrices.innerHTML = ((+countMinus) * (+calculationPrice)) + ' UAH';
        }
      };
    });

  };


  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initCustomSelect();
    initFormValidate();
    initSwipers();
    initSideMenu();
    cartCardsHandler();
    cardsHandler();
    paymentMethodCheck();


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
