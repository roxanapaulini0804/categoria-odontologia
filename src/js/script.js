(function () {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".carousel-button-right");
    const prevButton = document.querySelector(".carousel-button-left");

    if (!track || slides.length === 0 || !nextButton || !prevButton) {
        console.error("Error: Elementos del carrusel no encontrados o incompletos.");
        return; // Ahora es válido porque está dentro de una función
    }

    // Configurar la posición inicial de los slides
    let currentSlide = 0;
    const calculateSlideWidth = () => slides[0].offsetWidth;

    const setSlidePositions = () => {
        const slideWidth = calculateSlideWidth();
        slides.forEach((slide, index) => {
            slide.style.left = `${slideWidth * index}px`;
        });
    };

    const moveToSlide = (index) => {
        const slideWidth = calculateSlideWidth();
        track.style.transform = `translateX(-${slideWidth * index}px)`;
        currentSlide = index;
    };

    // Configurar eventos para los botones
    nextButton.addEventListener("click", () => {
        const nextSlide = currentSlide + 1 < slides.length ? currentSlide + 1 : 0;
        moveToSlide(nextSlide);
    });

    prevButton.addEventListener("click", () => {
        const prevSlide = currentSlide - 1 >= 0 ? currentSlide - 1 : slides.length - 1;
        moveToSlide(prevSlide);
    });

    // Ajustar posiciones al redimensionar la ventana
    window.addEventListener("resize", setSlidePositions);

    // Inicializar las posiciones de los slides
    setSlidePositions();
})();



// Inicialización de Swiper para bloque3
document.addEventListener("DOMContentLoaded", () => {
    const swiperBloque3 = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
    });
});


