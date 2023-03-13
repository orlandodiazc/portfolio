const btnOpenMenu = document.querySelector('.btn-header');
const mobileMenu = document.querySelector('.hide-mobile-menu');
const btnExit = document.querySelector('.btn-exit');
const navLinks = document.querySelectorAll('.nav-links');

btnOpenMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

btnExit.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

navLinks.forEach((link) => link.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
}));
