
const paymentMethodCheck = () => {
  const addToCartBtn = document.querySelectorAll('.card-btn');
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

};


export { paymentMethodCheck }
