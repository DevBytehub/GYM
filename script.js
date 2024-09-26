/*
    window.addEventListener('scroll', function() {
        var logo = document.querySelector('.logo');
        var clasesSection = document.getElementById('clases');
        var clasesPosition = clasesSection.getBoundingClientRect().top;
        var clasesPosition1 = clasesSection.getBoundingClientRect().down;

        // Detecta si el usuario ha llegado a la sección de Clases
        if (clasesPosition < window.innerHeight && clasesPosition > 0) {
            logo.style.opacity = '0';  // Ocultar logo
        } else {
            logo.style.opacity = '1';  // Mostrar logo
        }
    });

*/
    // Lista de imágenes para el Hero
    const heroImages = [
        'url("img/hero2.jpg")',
        'url("img/hero3.jpg")',
        'url("img/hero4.jpg")',
        'url("img/hero5.jpg")'
    ];
    const celu = "url('img/hero-pantalla-ch.webp')";

    let currentImageIndex = 0; // Índice de la imagen actual

    // Función para cambiar el fondo del Hero
    function changeHeroBackground() {
        const heroSection = document.getElementById('funcion');
        // Verifica si la pantalla es grande (más de 767px)
        if (window.innerWidth > 750) {
            currentImageIndex = (currentImageIndex + 1) % heroImages.length;
            heroSection.style.backgroundImage = heroImages[currentImageIndex];
            heroSection.style.backgroundPosition = 'center';
            heroSection.style.backgroundRepeat = 'no-repeat';
            heroSection.style.backgroundSize = 'cover';
        } else {
            
            // Si es una pantalla pequeña, aplicar el color sólido
            // heroSection.style.backgroundImage = 'none'; // Remover la imagen de fondo
            //  heroSection.style.background = celu;
            // heroSection.style.backgroundPosition = 'center';
            // heroSection.style.backgroundRepeat = 'no-repeat';
            // heroSection.style.backgroundSize = 'cover';
            // heroSection.style.backgroundColor = '#1C3245'; // Aplicar color sólido
        }
    }

    // Cambia la imagen cada 10 segundos (10000 ms) solo en pantallas grandes
    setInterval(changeHeroBackground, 10000);