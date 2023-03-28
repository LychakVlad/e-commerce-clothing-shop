const cartHandler = () => {
  if (!document.querySelector('.cart')) {
    return;
  }


  const counterPlus = document.querySelectorAll('.counter-plus');
  const counterMinus = document.querySelectorAll('.counter-minus');

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


export { cartHandler };
