document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const slides = document.querySelectorAll(".slide");
    const total = slides.length;

    function showSlide(i) {
        const slider = document.querySelector(".slides");
        index = (i + total) % total;
        slider.style.transform = `translateX(${-index * 100}%)`;
    }

    document.querySelector(".prev").addEventListener("click", () => showSlide(index - 1));
    document.querySelector(".next").addEventListener("click", () => showSlide(index + 1));
});
