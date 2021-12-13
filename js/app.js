
AOS.init();

const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");
const navLeft = menu.getBoundingClientRect().left;


navOpen.addEventListener("click", () => {
    if (navLeft < 0) {
        menu.classList.add("show");
        document.body.classList.add("show");
        navBar.classList.add("show");
    }
});

navClose.addEventListener("click", () => {
    if (navLeft < 0) {
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    }
});

// Fixed Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
        navBar.classList.add("fix-nav");
    } else {
        navBar.classList.remove("fix-nav");
    }
});

// Animation navigation & hero section
gsap.from(".logo", {
    opacity: 0, duration: 1, delay: 0.5, y: -10
});

gsap.from(".hamburger", {
    opacity: 0, duration: 1, delay: 1, x: 20
});

gsap.from(".banner", {
    opacity: 0, duration: 1, delay: 1.5, x: -200
});

gsap.from(".hero h1", {
    opacity: 0, duration: 1, delay: 2, y: -50
});

gsap.from(".hero h2", {
    opacity: 0, duration: 1, delay: 2.5, y: -45
});

gsap.from(".hero h2 strong", {
    opacity: 0, duration: 1, delay: 3, y: -30
});

gsap.from(".nav-item", {
    opacity: 0, duration: 1, delay: 1.2, y: 30, stagger: 0.2,
});

gsap.from(".icons span", {
    opacity: 0, duration: 1, delay: 4, x: -30, stagger: 0.2,
});

// Animation section competences
gsap.from(".text-inner h4", {
    opacity: 0, duration: 1, delay: 1.5, x: -50, stagger: 0.2,
});

gsap.from(".text-inner h1", {
    opacity: 0, duration: 1, delay: 1.5, y: -50, stagger: 0.2,
})

gsap.from(".text-inner h6", {
    opacity: 0, duration: 1, delay: 2, x: -50, stagger: 0.2,
})

gsap.from(".bg-text h2", {
    opacity: 0, duration: 1, delay: 2.5, x: -50, stagger: 0.2,
});