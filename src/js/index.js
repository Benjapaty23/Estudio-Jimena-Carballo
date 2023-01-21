const navToggle = document.querySelector(".col-btn")
const navMenu = document.querySelector(".navbar-nav")
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("navbar-nav_visible");

    if (navMenu.classList.contains("navbar-nav_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
})
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        nav.classList.add('navbar-scrolled');
    } else {
        nav.classList.remove('navbar-scrolled');
    }
})

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
    parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});