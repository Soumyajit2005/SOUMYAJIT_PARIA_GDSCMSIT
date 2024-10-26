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

// custom cursor
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".cursor-circle");

const colors = [
  "#add8e6", // Light Blue
  "#b0e0e6", // Powder Blue
  "#87cefa", // Light Sky Blue
  "#87ceeb", // Sky Blue
  "#00bfff", // Deep Sky Blue
  "#1e90ff", // Dodger Blue
  "#6495ed", // Cornflower Blue
  "#4682b4", // Steel Blue
  "#5f9ea0", // Cadet Blue
  "#7b68ee", // Medium Slate Blue
  "#6a5acd", // Slate Blue
  "#b0c4de", // Light Steel Blue
  "#add8e6", // Light Blue
  "#afeeee", // Pale Turquoise
  "#48d1cc", // Medium Turquoise
  "#40e0d0", // Turquoise
  "#00ced1", // Dark Turquoise
  "#20b2aa", // Light Sea Green
  "#5f9ea0", // Cadet Blue
  "#4682b4", // Steel Blue
  "#b0e0e6"  // Powder Blue
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
