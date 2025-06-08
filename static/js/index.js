// Loading Screen and Hero Animations
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const heroElements = {
        title: document.querySelector('.hero-text h1'),
        description: document.querySelector('.hero-text p'),
        buttons: document.querySelector('.hero-btns'),
        social: document.querySelector('.social-icons'),
        image: document.querySelector('.hero-img')
    };
    
    // Hide hero elements initially
    Object.values(heroElements).forEach(element => {
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
        }
    });

    // Simulate minimum loading time (1.5 seconds)
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        
        // Animate hero elements after loading screen disappears
        setTimeout(() => {
            Object.values(heroElements).forEach((element, index) => {
                if (element) {
                    setTimeout(() => {
                        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, index * 200); // Stagger the animations
                }
            });
        }, 1000); // Wait for loading screen to fade out
    }, 2000);
});

// Manejar el efecto de scroll para el header
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 50);

    // Añadir animación de elementos al hacer scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('animated');
        }
    });
});

const formulario = document.querySelector('.contact-form form');
// Agregamos el evento submit al formulario
formulario.addEventListener('submit', function (event) {
    // Prevenimos el comportamiento por defecto del formulario
    event.preventDefault();

    // Mostramos un mensaje de éxito
    alert('¡Gracias! Tu mensaje ha sido enviado correctamente.');

    // Limpiamos todos los campos del formulario
    formulario.reset();
});


// Script para desplazamiento suave
document.querySelectorAll('.nav-links a, .logo').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// También agregamos desplazamiento suave para los botones del hero section
document.querySelectorAll('.hero-btns a').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    body.classList.toggle('menu-open');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        body.classList.remove('menu-open');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hero section animation on load
window.addEventListener('DOMContentLoaded', () => {
    const heroEls = document.querySelectorAll('.hero-animate');
    heroEls.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, i * 200);
    });
});
