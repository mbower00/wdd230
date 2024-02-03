const hamburgerEl = document.getElementById("hamburger")
hamburgerEl.addEventListener("click", toggleNav)
let isOpen = false

function toggleNav() {
    navEl = document.querySelector(".navigation")
    console.log(navEl);
    navEl.classList.toggle("open")
    isOpen = !isOpen
    if (isOpen) {
        hamburgerEl.innerHTML = "&#10005;"
    } else {
        hamburgerEl.innerHTML = "&#9776;"
    }
}