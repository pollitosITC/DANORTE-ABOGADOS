document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Puedes añadir más JavaScript aquí para cosas como:
// - Validación de formulario (aunque el HTML tiene "required")
// - Efectos visuales al hacer scroll
// - Un menú "hamburguesa" para móviles si decides implementarlo