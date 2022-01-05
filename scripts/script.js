const hamburgerBtn = document.getElementById("hamburger");
const line = document.getElementById("line");

const toggleMenu = () => {
    line.classList.add("hide");
}

hamburgerBtn.addEventListener("click", toggleMenu);