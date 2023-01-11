const headerNav = document.querySelector('.header-nav');
const header = document.querySelector('header');
const btnOpen = document.querySelector('.btn-header');
const navItems = document.querySelector('.header-nav ul');

function openMobileMenu() {
  headerNav.classList.add('mobile-menu-active');
  document.body.appendChild(headerNav);
}

function closeMobileMenu(event) {
  if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON') {
    headerNav.classList.remove('mobile-menu-active');
    header.appendChild(headerNav);
  }
}

btnOpen.addEventListener('click', openMobileMenu);
navItems.addEventListener('click', closeMobileMenu);
