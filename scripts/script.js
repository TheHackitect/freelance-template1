const hamburgerBtn = document.getElementById("hamburger");
const line = document.getElementById("line");
const navLinks = document.getElementById("nav-links");

const toggleMenu = () => {
    line.classList.toggle("open-hamburger");
    navLinks.classList.toggle("show-links");
}

hamburgerBtn.addEventListener("click", toggleMenu);