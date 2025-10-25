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

// Intersection Observer for fade-in on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe both intro and services sections
const sectionsToAnimate = document.querySelectorAll('.intro, .services, .reviews');
sectionsToAnimate.forEach(section => {
    observer.observe(section);
});

// Read More Button //
document.addEventListener('DOMContentLoaded', () => {
    // Handle read more buttons
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const reviewItem = button.closest('.review-item');
            reviewItem.classList.add('expanded');
        });
    });

    // Your existing scroll animation code
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
}); 
