document.addEventListener('DOMContentLoaded', () = {

     1. Menú móvil (hamburguesa)
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () = {
             Alterna las clases para mostrarocultar el menú y cambiar el ícono
            mobileMenu.classList.toggle('hidden');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

     2. Desplazamiento suave (Smooth Scrolling) para todos los enlaces del nav
    document.querySelectorAll('nav a[href^=#]').forEach(anchor = {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior 'smooth'
                });
            }

             Ocultar el menú móvil después de hacer clic en un enlace (opcional)
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

     3. Efectos visuales al hacer scroll (Fade-in)
    const observer = new IntersectionObserver((entries) = {
        entries.forEach(entry = {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                 Opcional deja de observar el elemento una vez que es visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold 0.1  El elemento se considera visible cuando el 10% está en pantalla
    });

     Observar todos los elementos que queremos animar
    document.querySelectorAll('.fade-in-element').forEach(el = {
        observer.observe(el);
    });

     4. Manejo del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    const formSuccessMessage = document.getElementById('form-success-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();  Prevenir el envío real del formulario

             Simulación de envío Ocultar formulario y mostrar mensaje de éxito
            const formWrapper = document.getElementById('form-wrapper');
            if (formWrapper && formSuccessMessage) {
                formWrapper.style.display = 'none';
                formSuccessMessage.style.display = 'block';

                 Opcional resetear el formulario después de unos segundos
                setTimeout(() = {
                    formWrapper.style.display = 'block';
                    formSuccessMessage.style.display = 'none';
                    contactForm.reset();
                }, 5000);  El mensaje se muestra por 5 segundos
            }
        });
    }
});
