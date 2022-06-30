// navbar
const nav = document.querySelector(".navbar-nav");

document.querySelector(".navbar-toggler").addEventListener("click", () => {
    if (nav.classList.contains("show")) {
        nav.classList.remove("show");
    } else {
        nav.classList.add("show");
    }
});

// chatbot
const wrapper = document.querySelector(".chatbot .wrapper");
document.querySelector(".show-btn").addEventListener("click", () => {
    if (wrapper.classList.contains("show-chatbot")) {
        wrapper.classList.remove("show-chatbot");
    } else {
        wrapper.classList.add("show-chatbot");
    }
});


document.querySelector(".chatbot .next").addEventListener("click", () => {
    wrapper.classList.remove("show-chatbot");
});

// scroll olunursa chatbot wrapperi sil
window.addEventListener("scroll", () => {
    const scrolled = Math.round(window.scrollY);

    if (scrolled) {
        wrapper.classList.remove("show-chatbot");
    }
})