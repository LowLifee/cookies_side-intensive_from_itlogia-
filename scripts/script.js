document.addEventListener("DOMContentLoaded", () => {

   document.querySelector('#main-action-button').addEventListener('click', () => {
      document.querySelector('#products').scrollIntoView({ behavior: "smooth" });
   });

   const links = document.querySelectorAll('.menu-item > a');

   links.forEach(link => {
      link.addEventListener('click', () => {
         document.querySelector(`#${link.getAttribute('data-link')}`).scrollIntoView({ behavior: "smooth" });
      })
   });

   const buttons = document.querySelectorAll('.products-item .button');

   buttons.forEach(button => {
      button.addEventListener('click', () => {
         document.querySelector('#order').scrollIntoView({ behavior: "smooth" });
      })
   });

   const prices = document.querySelectorAll('.products-item-price');

   document.querySelector('#change-currency').addEventListener('click', (e) => {
      const curentCurrency = e.target.innerText;

      let newCurrency = '$';
      let coeficient = 1;

      if (curentCurrency === '$') {
         newCurrency = '₽';
         coeficient = 90;
      } else if (curentCurrency === '₽') {
         newCurrency = 'BYN';
         coeficient = 3;
      }else if (curentCurrency === 'BYN') {
         newCurrency = '€';
         coeficient = 0.9;
      }else if (curentCurrency === '€') {
         newCurrency = 'CNY';
         coeficient = 14;
      }

      e.target.innerText = newCurrency;

      prices.forEach(price => {
         price.innerText = `${(price.getAttribute('data-base-price') * coeficient).toFixed(1)}${newCurrency}`
      });
   });

   const product = document.querySelector('#product'),
      name = document.querySelector('#name'),
      phone = document.querySelector('#phone');

   document.querySelector('.order-form').addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;

      [product, name, phone].forEach(item => {
         if (!item.value) {
            item.style.borderColor = 'red';
            hasError = true;
         } else {
            item.style.borderColor = '';
         }
      });

      if (!hasError) {
         [product, name, phone].forEach(item => {
            item.value = '';
         });
         alert('Спасибо за заказ! Мы скоро свяжемся с вами!')
      }

   });



});