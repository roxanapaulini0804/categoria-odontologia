window.onload = () => {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".carousel-button-right");
    const prevButton = document.querySelector(".carousel-button-left");

    if (!track || slides.length === 0 || !nextButton || !prevButton) {
        console.error("Error: Elementos del carrusel no encontrados o incompletos.");
        return;
    }

    const calculateSlideWidth = () => slides[0].offsetWidth;

    const setSlidePositions = () => {
        track.style.transition = "none"; // Evitar transiciones bruscas
        const slideWidth = calculateSlideWidth();
        slides.forEach((slide, index) => {
            slide.style.left = `${slideWidth * index}px`;
        });
        track.style.transition = ""; // Restaurar transición
    };

    setSlidePositions();

    let currentSlide = 0;

    const moveToSlide = (index) => {
        const slideWidth = calculateSlideWidth();
        track.style.transform = `translateX(-${slideWidth * index}px)`;
        currentSlide = index;
    };

    nextButton.addEventListener("click", () => {
        const nextSlide = (currentSlide + 1) % slides.length;
        moveToSlide(nextSlide);
    });

    prevButton.addEventListener("click", () => {
        const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
        moveToSlide(prevSlide);
    });

    const autoplayInterval = 7000; // Cambia cada 5 segundos
    setInterval(() => {
        const nextSlide = (currentSlide + 1) % slides.length;
        moveToSlide(nextSlide);
    }, autoplayInterval);

    window.addEventListener("resize", setSlidePositions);
};


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


