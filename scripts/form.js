// repeat password logic
const passEl = document.getElementById("password")
const repeatPassEl = document.getElementById("repeat-password")
const repeatPassMessEl = document.getElementById("repeat-password-message")

repeatPassEl.addEventListener("focusout", () => {
    // when unfocused...
    if (passEl.value !== repeatPassEl.value){
        // NO match!
        repeatPassMessEl
        repeatPassMessEl.style.display = "block"
        passEl.value = ""
        repeatPassEl.value = ""
        passEl.focus()
    } else {
        // match!
        repeatPassMessEl.style.display = "none"
    }
})


// display rating
const ratingDisplayEl = document.getElementById("rating-display")
const ratingEl = document.getElementById("rating")
ratingDisplayEl.textContent = ratingEl.value

ratingEl.addEventListener("input", () => {
    // on input
    ratingDisplayEl.textContent = ratingEl.value
})