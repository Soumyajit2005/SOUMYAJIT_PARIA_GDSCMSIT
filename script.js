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