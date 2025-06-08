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

// Background Animation
function initBackground() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
        canvas: document.getElementById('background-animation'), 
        alpha: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);

    const material = new THREE.PointsMaterial({ color: 0x3498db, size: 2 });
    const geometry = new THREE.Group();

    for (let i = 0; i < 2000; i++) {
        const x = Math.random() * 2000 - 1000;
        const y = Math.random() * 2000 - 1000;
        const z = Math.random() * 2000 - 1000;
        
        const shapeType = Math.floor(Math.random() * 3);
        let shape;

        if (shapeType === 0) {
            shape = new THREE.PlaneGeometry(2, 2);
        } else if (shapeType === 1) {
            shape = new THREE.CircleGeometry(2, 32);
        } else {
            shape = new THREE.BufferGeometry();
            const vertices = new Float32Array([
                0, 2, 0,
                -2, -2, 0,
                2, -2, 0
            ]);
            shape.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        }

        const mesh = new THREE.Mesh(shape, material);
        mesh.position.set(x, y, z);
        geometry.add(mesh);
    }

    scene.add(geometry);
    camera.position.z = 1000;

    function animate() {
        requestAnimationFrame(animate);
        geometry.rotation.x += 0.0002;
        geometry.rotation.y += 0.0002;
        renderer.render(scene, camera);
    }
    animate();
}

// DNA Animation
function createDNA() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        canvas: document.getElementById('hero-canvas'),
        antialias: true
    });
    
    function updateSize() {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    
    const group = new THREE.Group();
    scene.add(group);
    
    const numPoints = 40;
    const amplitude = 40;
    const spacing = 6;
    
    const material = new THREE.MeshPhysicalMaterial({ 
        emissive: 0x3498db,
        emissiveIntensity: 0.8,
        metalness: 0.9,
        roughness: 0.1,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1
    });
    
    const lineMaterial = new THREE.LineBasicMaterial({ 
        color: 0x3498db,
        opacity: 0.4,
        transparent: true
    });
    
    for (let i = 0; i < numPoints; i++) {
        const angle = i * (Math.PI / 8);
        
        const x1 = Math.sin(angle) * amplitude;
        const x2 = -Math.sin(angle) * amplitude;
        const y = i * spacing - (numPoints * spacing) / 2;
        const z = Math.cos(angle) * amplitude;
        
        const sphereGeometry = new THREE.SphereGeometry(1.2 + Math.random() * 0.8, 32, 32);
        const sphere1 = new THREE.Mesh(sphereGeometry, material);
        const sphere2 = new THREE.Mesh(sphereGeometry, material);
        
        sphere1.position.set(x1, y, z);
        sphere2.position.set(x2, y, -z);
        
        group.add(sphere1);
        group.add(sphere2);
        
        if (i < numPoints - 1) {
            const nextAngle = (i + 1) * (Math.PI / 8);
            const nextX1 = Math.sin(nextAngle) * amplitude;
            const nextY = (i + 1) * spacing - (numPoints * spacing) / 2;
            const nextZ = Math.cos(nextAngle) * amplitude;
            
            const lineGeometry = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(x1, y, z),
                new THREE.Vector3(nextX1, nextY, nextZ)
            ]);
            const line = new THREE.Line(lineGeometry, lineMaterial);
            group.add(line);
        }
    }
    
    const mainLight = new THREE.PointLight(0xffffff, 2, 300);
    mainLight.position.set(0, 10, -20);
    scene.add(mainLight);
    
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    const bloomLight = new THREE.PointLight(0x3498db, 0.5, 200);
    bloomLight.position.set(-50, 0, 50);
    scene.add(bloomLight);
    
    camera.position.x = 200;
    camera.position.y = 0;
    camera.position.z = 0;
    camera.lookAt(0, 0, 0);
    
    group.rotation.x = Math.PI / 2;
    
    function animate() {
        requestAnimationFrame(animate);
        group.rotation.y += 0.003;
        
        group.position.y = Math.sin(Date.now() * 0.001) * 5;
        
        renderer.render(scene, camera);
    }
    
    animate();
}

// Scroll reveal
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Handle window resize
function handleResize() {
    const canvas = document.getElementById('background-animation');
    if (canvas) {
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

// Initialize everything
window.addEventListener('load', () => {
    initBackground();
    createDNA();
    window.addEventListener('scroll', reveal);
    window.addEventListener('resize', handleResize);
    reveal();
});
