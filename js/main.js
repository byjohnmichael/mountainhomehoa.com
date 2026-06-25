const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const navbar = document.getElementById('navbar');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
  });
}

window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });
