'use strict';

var mainMenu = document.querySelector('.main-menu');
var navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function () {
  if (mainMenu.classList.contains('main-menu--close')) {
    mainMenu.classList.remove('main-menu--close');
    mainMenu.classList.add('main-nav--open');

  } else {
    mainMenu.classList.add('main-menu--close');
    mainMenu.classList.remove('main-nav--open');
  }
});
