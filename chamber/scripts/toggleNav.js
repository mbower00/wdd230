const hamburgerEl = document.getElementById("hamburger")
const navEl = document.querySelector("nav")
let isOpen = false

hamburgerEl.addEventListener("click", toggleNav)

function toggleNav() {
    navEl.classList.toggle("open")
    isOpen = !isOpen
    if (isOpen) {
        hamburgerEl.innerHTML = "&#10005"
    } else {
        hamburgerEl.innerHTML = "&#9776;"
    }
}