# Гайд по работе со сборкой
## Основные отличия от старой сборки
1. Добавлен Pug (в нем учтено кэширование, для ускорения сборки)
2. Png \ jpg автоматически не ужимаются, webp не создается.
При необходимости используйте `npm run webp` и `npm run imagemin`
Webp - создание в source, imagemin - оптимизация в docs
3. Добавлены дополнительные вотчеры, чтобы при изменении js и картинок не приходилось перезапускать сборку
4. Добавлена сущность модалок
5. Немного изменен eslint. Косые кавычки теперь должны использоваться только в шаблонных строках
6. Добавлены различные фиксы для ie11
7. Обновлена файловая структура, добавлен пример `container.scss`, в `reboot.scss` собраны различные ресеты \ кроссбраузерные фиксы

❗ Обязательно обратите внимание на `chrome autofill background removal` в `reboot.scss`. Там необходимо заменить цвета на используемые в проекте.

## Модалки
В сборку добавлена сущность модалок.

`pug/base/modal.html` + `sass/blocks/modal.scss` + `js/utils/modal.js` + `js/modules/init-modals.js`

Также в main.pug добавлены две модалки для примера.

### Создаем модалку

```pug
  //- Вызов модалки
  a(href="#", data-modal="success") modal--success link

  //- Инклюд модалки
  +modal("modal--success modal--no-scale modal--fit-content")
    +modal-success()

  //- Содержимое +modal-success()
  mixin modal-success()
    p.modal__description Содержимое модалки
```

В `js/modules/init-modals.js` необходимо найти модалку + ссылки на нее и передать как аргументы в `setupModal()`.

```js
  // аргументы setupModal(modal, closeCallback, modalBtns, openCallback, noPrevDefault)
  // возможна инициализация только с первыми аргументом,
  // если вам нужно открывать модалку в другом месте под какими-нибудь условиями
  const initModals = () => {
    if (modalFeedback && modalFeedbackBtns.length) {
      setupModal(modalFeedback, false, modalFeedbackBtns, false, false);
    }
    if (modalSuccess && modalSuccessBtns.length) {
      setupModal(modalSuccess, false, modalSuccessBtns);
    }
  };
```

Готово. Остается поправить стили через модификатор при необходимости.
Также стоит учесть, если на проекте в разных модалках одинаковый размер заголовков, вертикальные отступы и т.д. - такие элементы имеет смысл внести в базу `sass/blocks/modal.scss`, а не стилизовать каждый раз отдельно для каждой модалки.

❗ Новые базовые модификаторы пишем в `sass/blocks/modal.scss`, а под каждую новую модалку, если ей требуется дополнительная стилизация стоит создавать новый scss файл, а не плодить модификаторы в базовом `modal.scss`

---

### Если вы незнакомы с gulp или вам не до конца понятно как работает сборка - предлагаем ознакомиться с [кратким описанием работы gulp](/GULP-GUIDE.md) 📘
