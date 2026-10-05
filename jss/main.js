// Función para mostrar los detalles del Orisha en el Modal
function mostrarDetalle(nombre, descripcion) {
    const modal = document.getElementById('orisha-modal');
    const titulo = document.getElementById('modal-titulo');
    const desc = document.getElementById('modal-descripcion');

    titulo.textContent = nombre;
    desc.textContent = descripcion;

    modal.style.display = 'flex';
}

// Función para cerrar el Modal
function cerrarModal() {
    const modal = document.getElementById('orisha-modal');
    modal.style.display = 'none';
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById('orisha-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Manejo sencillo del envío del formulario
document.getElementById('form-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por comunicarte! Tu mensaje ha sido enviado correctamente.');
    this.reset();
});

// Carrusel automático del hero
const heroSlides = Array.from(document.querySelectorAll('.hero-slide'));
const heroIndicators = Array.from(document.querySelectorAll('.hero-indicator'));
const heroCarousel = document.querySelector('.hero');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (heroSlides.length > 1 && heroCarousel) {
    let activeSlide = 0;
    let slideTimer;

    function showSlide(index) {
        activeSlide = (index + heroSlides.length) % heroSlides.length;

        heroSlides.forEach((slide, slideIndex) => {
            const isActive = slideIndex === activeSlide;
            slide.classList.toggle('is-active', isActive);
            slide.setAttribute('aria-hidden', String(!isActive));
        });

        heroIndicators.forEach((indicator, indicatorIndex) => {
            const isActive = indicatorIndex === activeSlide;
            indicator.classList.toggle('is-active', isActive);
            indicator.setAttribute('aria-pressed', String(isActive));
        });
    }

    function stopSlideTimer() {
        window.clearInterval(slideTimer);
    }

    function startSlideTimer() {
        stopSlideTimer();
        if (!prefersReducedMotion.matches && !document.hidden) {
            slideTimer = window.setInterval(() => showSlide(activeSlide + 1), 5000);
        }
    }

    document.querySelector('.hero-arrow--previous').addEventListener('click', () => {
        showSlide(activeSlide - 1);
        startSlideTimer();
    });

    document.querySelector('.hero-arrow--next').addEventListener('click', () => {
        showSlide(activeSlide + 1);
        startSlideTimer();
    });

    heroIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            startSlideTimer();
        });
    });

    heroCarousel.addEventListener('mouseenter', stopSlideTimer);
    heroCarousel.addEventListener('mouseleave', startSlideTimer);
    heroCarousel.addEventListener('focusin', stopSlideTimer);
    heroCarousel.addEventListener('focusout', (event) => {
        if (!heroCarousel.contains(event.relatedTarget)) {
            startSlideTimer();
        }
    });

    document.addEventListener('visibilitychange', startSlideTimer);
    prefersReducedMotion.addEventListener('change', startSlideTimer);
    startSlideTimer();
}