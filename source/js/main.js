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

  const WOW = require('wowjs');

  window.wow = new WOW.WOW({
    live: false,
  });

  window.wow.init();


  const addToCartBtn = document.querySelectorAll('.btn--transparent'); // Поменять на .card-btn
  const cartIcon = document.querySelector('.cart-icon');
  const cartModal = document.querySelector('.cart-confirm-modal');

  const closeCartModal = () => {
    cartModal.classList.remove('is-active');
  };

  addToCartBtn.forEach((item) => {
    item.addEventListener('click', function () {
      cartIcon.style.opacity = '1';
      item.textContent = 'Item added to cart';
      cartModal.classList.add('is-active');
      item.disabled = true;
      setTimeout(closeCartModal, 1500);
    });
  });


  const paymentMethodCart = document.querySelectorAll('.custom-toggle__cart');
  const orderButton = document.querySelector('.btn__order');

  paymentMethodCart.forEach((item) => {
    item.addEventListener('change', function () {
      orderButton.classList.remove('is-disabled');
    });
  });


  const favCardsHandler = () => {
    if (!document.querySelector('.fav-page')) {
      return;
    }

    const closeButton = document.querySelectorAll('[data-card="button-close"]');
    const cardItem = document.querySelectorAll('[data-card="card"]');
    const cardsBlock = document.querySelector('.fav-page__cards');
    const emptyCart = document.querySelector('.cart__empty-card');
    const favWrapper = document.querySelector('.fav__wrapper');

    closeButton.forEach((item) => {
      item.onclick = function (e) {
        cardItem.forEach(() => {
          e.target.parentNode.parentNode.parentNode.remove();
        });
        if (cardsBlock.innerText === '') {
          emptyCart.classList.add('is-active');
          favWrapper.classList.add('is-hidden');
        }

      };
    });
  };

  const cartCardsHandler = () => {
    if (!document.querySelector('.cart')) {
      return;
    }

    const closeButton = document.querySelector('[data-card="button-close"]');
    const cardItem = document.querySelector('[data-card="card"]');
    const cardsBlock = document.querySelector('.cart__cards-block');
    const emptyCart = document.querySelector('.cart__empty-card');
    const cartWrapper = document.querySelector('.cart__wrapper');

    closeButton.onclick = function () {
      cardItem.remove();
      if (cardsBlock.innerText === '') {
        emptyCart.classList.add('is-active');
        cartWrapper.classList.add('is-hidden');
      }

    };


    const counterPlus = document.querySelector('.counter-plus');
    const counterMinus = document.querySelector('.counter-minus');

    const oldPrices = document.querySelector('.item-card__old-price');
    const totalPrice = document.querySelector('.cart__total-price');
    const itemPrices = document.querySelector('.item-card__price');

    const counter = document.querySelector('.counter-digit');

    let calculationPrice = itemPrices.innerHTML.replace(/[^+\d]/g, '');
    let calculationOldPrice = oldPrices.innerHTML.replace(/[^+\d]/g, '');
    let calculationTotalPrice = totalPrice.innerHTML.replace(/[^+\d]/g, '');


    counterPlus.onclick = function (e) {
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

    counterMinus.onclick = function (e) {
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
    favCardsHandler();


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
