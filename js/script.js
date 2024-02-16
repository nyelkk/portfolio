function prevSlide(sliderId) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelector('.slides');
    const slideWidth = slides.querySelector('.slide').offsetWidth;
    slides.style.transform = `translateX(-${slideWidth}px)`;
    setTimeout(() => {
        slides.appendChild(slides.firstElementChild);
        slides.style.transition = 'none';
        slides.style.transform = 'translateX(0)';
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease';
        });
    }, 500);
}

function nextSlide(sliderId) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelector('.slides');
    const slideWidth = slides.querySelector('.slide').offsetWidth;
    slides.style.transition = 'transform 0.5s ease';
    slides.style.transform = `translateX(-${slideWidth}px)`;
    setTimeout(() => {
        slides.appendChild(slides.firstElementChild);
        slides.style.transition = 'none';
        slides.style.transform = 'translateX(0)';
    }, 500);
}

