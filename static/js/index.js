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
