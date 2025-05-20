window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 50);
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
document.querySelectorAll('.nav-links a').forEach(anchor => {
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
