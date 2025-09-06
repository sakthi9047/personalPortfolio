const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"        
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealoption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealoption,
});

ScrollReveal().reveal(".header__content .section__description", {
    ...scrollRevealoption,
    delay:500,
});

ScrollReveal().reveal(".header__content .header__btn", {
    ...scrollRevealoption,
    delay:1000,
});

//about container
ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealoption,
});

ScrollReveal().reveal(".about__content .section__description", {
    ...scrollRevealoption,
    delay:500,
});

ScrollReveal().reveal(".about__content .about__btn", {
    ...scrollRevealoption,
    delay:1000,
});

// service container
ScrollReveal().reveal(".service__card", {
    ...scrollRevealoption,
    delay:500,
});