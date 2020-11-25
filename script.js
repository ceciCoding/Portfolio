window.addEventListener("hashchange", function () {
     window.scrollTo(window.scrollX, window.scrollY - 190);
});

//closing the burger menu
const burger = document.querySelector('#menu-wraps');
const toggler = document.querySelector('.toggler');

burger.addEventListener('click', (e) => {
     if (e.target.className === 'burger-list-item') {
          toggler.checked = false;
     }
})

//selecting text in inputs
const form = document.querySelector('.cont-form');
form.addEventListener('click', (e) => {
     if (e.target.id === 'message' || e.target.className === 'inpt') {
          this.focus();
          this.select();
     }
})