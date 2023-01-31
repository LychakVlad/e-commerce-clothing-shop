import { iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';
import { initCustomSelect } from './modules/form/init-custom-select';
import { initFormValidate } from './modules/form/init-form-validate';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  const swiper = new Swiper('.main-slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
      },
    },
    autoHeight: true,
  });

  const secondSwiper = new Swiper('.clothes-slider', {
    breakpoints: {
      800: {
        slidesPerView: 4
      },
      570: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 2
      }
    },
    loop: true,
    spaceBetween: 45,
    slidesPerGroup: 2,
    slidesPerView: 4,
    navigation: {
      nextEl: '.clothes-slider__button-next',
      prevEl: '.clothes-slider__button-prev',
    },
  });

  // Modules
  // ---------------------------------
  const menuButton = document.querySelectorAll('.nav-menu-open');
  if (menuButton) {
    const headerMenu = document.querySelector('.header-menu');
    const burgerIcon = document.querySelector('.header__menu-item--trigger')

    for (var i = 0; i < menuButton.length; i++) {
      menuButton[i].addEventListener("click", function (e) {
        headerMenu.classList.toggle('_active');
      });
    }
    burgerIcon.addEventListener('click', () => {
      burgerIcon.classList.toggle('active')
      headerMenu.classList.toggle('_active');
    })
  };


  document.querySelectorAll('.faq-accordion-item__question').forEach((item) =>
    item.addEventListener('click', () => {
      const parent = item.parentNode;

      if (parent.classList.contains('active')) {
        parent.classList.remove('active');
      } else {
        document
          .querySelectorAll('.faq-accordion-item')
          .forEach((child) => child.classList.remove('active'))

        parent.classList.add('active')
      }
    })
  )


  document.querySelectorAll('.header-menu__title').forEach((item) =>
    item.addEventListener('click', () => {
      const parent = item.parentNode;
      const accordionContent = item.nextElementSibling

      if (parent.classList.contains('open')) {
        parent.classList.remove('open');
        accordionContent.style.maxHeight = null

      } else {
        document
          .querySelectorAll('.header-menu__column')
          .forEach((child) => child.classList.remove('open'))
        document
          .querySelectorAll('.header-menu__list')
          .forEach((child) => child.style.maxHeight = null)

        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
        parent.classList.add('open')
      }
    })
  )





  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initCustomSelect();
    initFormValidate();
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
