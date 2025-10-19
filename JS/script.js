const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navbar = document.querySelector('.navbar-nav');
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('active');

    if (isOpen) {
        // Trigger fade-out animation
        navLinks.classList.add('closing');
        menuToggle.classList.remove('active');

        // Wait for animation to end before fully closing
        setTimeout(() => {
            navLinks.classList.remove('active', 'closing');
        }, 300);
    } else {
        navLinks.classList.add('active');
        menuToggle.classList.add('active');
    }
});

// Shrink logo and add blur on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar-nav');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});