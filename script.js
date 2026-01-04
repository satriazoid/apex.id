const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.style.opacity = "0.5";
        if (link.getAttribute("href") === "#" + current) {
            link.style.opacity = "1";
        }
    });
});
