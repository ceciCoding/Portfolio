window.addEventListener("hashchange", function () {
     window.scrollTo(window.scrollX, window.scrollY - 190);
});

const burger = document.querySelector('#menu-wraps');
const toggler = document.querySelector('.toggler');

burger.addEventListener('click', (e) => {
     if (e.target.className === 'burger-list-item') {
          toggler.checked = false;
     }
})