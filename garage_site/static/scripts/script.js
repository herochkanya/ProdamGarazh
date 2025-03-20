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

    // Кнопка повернення нагору
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 200) {
            scrollTopBtn.style.display = "flex";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
