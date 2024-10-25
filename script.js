// nav dropdown 
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.nav-dropdown');
    const dropdownMenu = document.querySelector('.nav-dropdown-menu');

    dropdown.addEventListener('mouseenter', function() {
        dropdownMenu.classList.add('show');
    });

    dropdown.addEventListener('mouseleave', function() {
        dropdownMenu.classList.remove('show');
    });
});



// destination corousel
let currentIndex = 2;  // Start with the third image as active

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Loop the index if out of bounds
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Reset all classes for all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Add the active class to the current slide
    slides[currentIndex].classList.add('active');

    // Center the active slide
    const carousel = document.querySelector('.carousel');
    const offset = -(currentIndex * 20) + 20;  // Adjust depending on flex value (20% for normal, 40% for active)
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
