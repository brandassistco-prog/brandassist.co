// Scroll animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".animate-on-scroll").forEach(el => {
    observer.observe(el);
});

// Form submit UX
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", () => {
        const btn = form.querySelector("button");
        btn.innerText = "Submitting...";
        btn.disabled = true;
    });
}
