// DOM Elements
const header = document.querySelector('header');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.control-dot');

// Variables
let currentSlide = 0;
let slideInterval;

// Event Listeners
document.addEventListener('DOMContentLoaded', init);
window.addEventListener('scroll', handleScroll);
menuToggle.addEventListener('click', toggleMenu);

// Initialize
function init() {
    // Start slider
    startSlider();

    // Add click events to navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }

            // Smooth scroll to target
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Add click events to slider dots
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const slideIndex = parseInt(dot.getAttribute('data-slide'));
            goToSlide(slideIndex);
        });
    });
}

// Handle scroll event
function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Toggle mobile menu
function toggleMenu() {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');

    // Toggle menu animation
    const spans = menuToggle.querySelectorAll('span');

    if (menuToggle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Slider functions
function startSlider() {
    // Show first slide
    showSlide(currentSlide);

    // Start automatic sliding
    slideInterval = setInterval(() => {
        nextSlide();
    }, 5000);
}

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // Show active slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function goToSlide(index) {
    // Reset interval to avoid quick slide change
    clearInterval(slideInterval);

    currentSlide = index;
    showSlide(currentSlide);

    // Restart interval
    slideInterval = setInterval(() => {
        nextSlide();
    }, 5000);
}

// Gallery image zoom effect
const galleryImages = document.querySelectorAll('.gallery-image');
galleryImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');

        // Skip if it's just a "#" link
        if (targetId === '#') return;

        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
function revealOnScroll() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 150) {
            section.classList.add('revealed');
        }
    });
}

// Add scroll event for animations
window.addEventListener('scroll', revealOnScroll);