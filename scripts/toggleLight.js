const lightToggleEl = document.getElementById("lightToggle")
lightToggleEl.addEventListener("click", toggleLight)
let isLight = false

function toggleLight() {
    bodyEl = document.querySelector("body")
    bodyEl.classList.toggle("light")
    isLight = !isLight
    if (isLight) {
        lightToggleEl.innerHTML = "&#9680;"
    } else {
        lightToggleEl.innerHTML = "&#9681;"
    }
}