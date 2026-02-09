(function () {
  'use strict';

  var header = document.querySelector('.header');
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  function onScroll() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  function toggleMenu() {
    navLinks.classList.toggle('open');
    document.body.classList.toggle('menu-open', navLinks.classList.contains('open'));
    navToggle.setAttribute('aria-label',
      navLinks.classList.contains('open') ? 'Fechar menu' : 'Abrir menu');
  }

  if (header) window.addEventListener('scroll', onScroll, { passive: true });
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', toggleMenu);
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        document.body.classList.remove('menu-open');
      });
    });
  }
})();
