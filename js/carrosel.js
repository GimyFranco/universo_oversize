let currentIndex = 0;

function showSlide(index) {
    const wrapper = document.querySelector('.carousel-wrapper');
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;

    currentIndex = index;

    wrapper.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + 3) % 3;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % 3;
    showSlide(currentIndex);
}