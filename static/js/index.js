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

// Contact Form Handling
async function handleSubmit(event) {
    event.preventDefault();
    
    // Get form elements
    const form = document.getElementById('contactForm');
    const submitButton = form.querySelector('button[type="submit"]');
    const buttonText = submitButton.querySelector('.button-text');
    const buttonLoader = submitButton.querySelector('.button-loader');
    
    // Clear previous error messages
    clearErrors();
    
    // Validate form
    if (!validateForm()) {
        return false;
    }
    
    try {
        // Show loading state
        submitButton.disabled = true;
        buttonText.style.display = 'none';
        buttonLoader.style.display = 'inline-block';
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Send email using EmailJS
        await emailjs.send('Portfolio', 'Correo recibido', {
            from_name: data.name,
            from_email: data.email,
            subject: data.subject,
            message: data.message
        });
        
        // Show success notification
        showNotification('success', 'Message sent successfully!', 'Thank you for contacting me. I will get back to you soon.');
        form.reset();
        
    } catch (error) {
        // Show error notification if something goes wrong
        showNotification('error', 'Error sending message', 'Please try again later.');
        console.error('Error:', error);
    } finally {
        // Reset button state regardless of success or failure
        submitButton.disabled = false;
        buttonText.style.display = 'inline-block';
        buttonLoader.style.display = 'none';
    }
    
    return false;
}

function validateForm() {
    let isValid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    // Validate name
    if (name.value.trim().length < 2) {
        showError('name', 'Name must be at least 2 characters long');
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate subject
    if (subject.value.trim().length < 3) {
        showError('subject', 'Subject must be at least 3 characters long');
        isValid = false;
    }
    
    // Validate message
    if (message.value.trim().length < 10) {
        showError('message', 'Message must be at least 10 characters long');
        isValid = false;
    }
    
    return isValid;
}

function showError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}Error`);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
        element.style.display = 'none';
    });
}

function showNotification(type, title, message) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">
                ${type === 'success' ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-exclamation-circle"></i>'}
            </div>
            <div class="notification-text">
                <h4>${title}</h4>
                <p>${message}</p>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Add show class after a small delay for animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Add click event to close button
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}
