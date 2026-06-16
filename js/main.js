/* Mountain Home HOA Solutions — Main JS */

(function () {
  'use strict';

  // ——— Navbar shadow on scroll ———
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ——— Mobile menu toggle ———
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ——— Contact form — client-side validation + success state ———
  const form = document.getElementById('contactForm');
  if (form) {
    const successMsg = document.getElementById('formSuccess');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Basic validation already handled by `required` attributes.
      // Submit here via fetch to your chosen backend (Formspree, Netlify, etc.)
      // For now, show a placeholder success state:
      form.style.display = 'none';
      if (successMsg) successMsg.style.display = 'block';
    });
  }
  // ——— Site Switcher ———
  const switcherToggle = document.getElementById('switcherToggle');
  const switcherPanel  = document.getElementById('switcherPanel');
  if (switcherToggle && switcherPanel) {
    switcherToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      switcherPanel.classList.toggle('open');
    });
    document.addEventListener('click', () => {
      switcherPanel.classList.remove('open');
    });
  }
})();
