// Tailwind Configuration
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        forest: {
          950: '#08251b',
          900: '#0d3828',
          800: '#145239',
          700: '#1b6b49',
          600: '#25845b',
          100: '#dff3e8',
          50: '#f2faf5'
        }
      }
    }
  }
};

// Mobile Navigation Toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    const isOpen = !navLinks.classList.contains('hidden');
    navLinks.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', String(!isOpen));
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        navLinks.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// Scroll Animation Observer (Fade-up effect)
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -60px 0px',
  threshold: 0.12
};

const scrollObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(el => {
  scrollObserver.observe(el);
});

