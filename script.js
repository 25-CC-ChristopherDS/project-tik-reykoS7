const sections = document.querySelectorAll(".section, .hero");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    const top = window.scrollY;
    if (top >= sec.offsetTop - 200) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});
