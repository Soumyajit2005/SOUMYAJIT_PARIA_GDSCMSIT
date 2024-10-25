// nav dropdown
const dropdown = document.querySelector('.nav-dropdown');
const dropdownMenu = document.querySelector('.nav-dropdown-menu');

dropdown.addEventListener('mouseenter', function() {
  dropdownMenu.classList.add('show');
});

dropdown.addEventListener('mouseleave', function() {
  dropdownMenu.classList.remove('show');
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
});