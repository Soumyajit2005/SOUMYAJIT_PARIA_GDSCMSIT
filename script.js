// nav dropdown
const dropdown = document.querySelector('.nav-dropdown');
const dropdownMenu = document.querySelector('.nav-dropdown-menu');

dropdown.addEventListener('mouseenter', function() {
  dropdownMenu.classList.add('show');
});

dropdown.addEventListener('mouseleave', function() {
  dropdownMenu.classList.remove('show');
});


// Type writter effect hero section 
var typed = new Typed('.changing-heading-text', {
  strings: ["Wonders", "Gems", "Secrets"],
  typeSpeed: 150,
  backSpeed: 70,
  loop: true
});


// destination carousel
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true, // Enable infinite loop mode
  slidesPerView: "auto", // Allows slide width to adjust to container width
  loopedSlides: 7, // Use an odd number to keep a central focus with balance
  loopAdditionalSlides: 1, // Adds additional slides for balance
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200, // Adjust for a suitable 3D effect
    modifier: 1.5, // Lower for subtle effects
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    575: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: "auto",
      spaceBetween: 40,
    },
  },
});

// hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar-links');

hamburger.addEventListener('click', function() {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// dark mode/light mode toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'light_mode';
  } else {
    themeToggle.textContent = 'dark_mode';
  }
});