const hamburgerBtn = document.getElementById("hamburger");
const line = document.getElementById("line");

const toggleMenu = () => {
    //line.classList.toggle("hide");
    line.classList.toggle("open-hamburger");
}

hamburgerBtn.addEventListener("click", toggleMenu);