document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation menu toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksArray = document.querySelectorAll('.nav-link');
    const header = document.querySelector('#header');
    
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animación del ícono hamburguesa
        burger.classList.toggle('toggle');
        
        // Animación de los enlaces
        navLinksArray.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
    
    // Close mobile menu when clicking a nav link
    navLinksArray.forEach(link => {
        link.addEventListener('click', () => {
            if(navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                burger.classList.remove('toggle');
                
                navLinksArray.forEach(link => {
                    link.style.animation = '';
                });
            }
        });
    });
    
    // Cambiar apariencia del header al hacer scroll
    window.addEventListener('scroll', () => {
        if(window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Validación del formulario de contacto
    const contactForm = document.querySelector('.contact-form');
    const formStatus = document.getElementById('form-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            // Aquí podríamos añadir validaciones adicionales si fuera necesario
            // Por ejemplo, validar formato de email, longitud de mensaje, etc.
            
            // Simulación de estado del formulario (esto se sobrescribirá con FormSubmit)
            formStatus.textContent = 'Enviando mensaje...';
            formStatus.className = 'form-status form-loading';
            
            // Let FormSubmit handle the submission if you're using that service
            // This is just for visual feedback to the user
            const submitBtn = document.getElementById('submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // The form will submit naturally to FormSubmit
            // This is just for visual feedback before the page redirects
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 3000);
        });
    }
    
    // Animate counters when they become visible
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 100;
            
            if(count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 10);
            } else {
                counter.innerText = target;
            }
        });
    }
    
    // Activate animation on scroll to the section
    function checkScrollPosition() {
        const statistics = document.querySelector('.statistics');
        if(statistics) {
            const position = statistics.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            
            if(position < screenHeight * 0.8) {
                animateCounters();
                window.removeEventListener('scroll', checkScrollPosition);
            }
        }
    }
    
    window.addEventListener('scroll', checkScrollPosition);
    
    // Update copyright year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Smooth Scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajuste para el header fijo
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation to show elements on scroll
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true
        });
    });
    
    // Log a message to confirm the script is loaded
    console.log('Portfolio website scripts initialized - Academic style');
});
