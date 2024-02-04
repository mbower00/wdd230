const spotlights = document.querySelector("#spotlight-container").children
let shownSpotlightI = 0

document.getElementById("back-spotlight").addEventListener("click", () => {changeSpotlight("back")})
document.getElementById("forward-spotlight").addEventListener("click", () => {changeSpotlight("forward")})

function changeSpotlight(direction) {
    let newShownSpotlightI = shownSpotlightI
    if (direction === "back") {
        if (shownSpotlightI === 0) {
            newShownSpotlightI = spotlights.length - 1
        } else {
            newShownSpotlightI -= 1
        }
    } else if (direction === "forward") {
        if (shownSpotlightI === spotlights.length - 1){
            newShownSpotlightI = 0
        } else {
            newShownSpotlightI += 1
        }
    } else {
        console.error('ERROR: You must pass either "back" or "forward"')
    }
    spotlights[newShownSpotlightI].classList.toggle("shown")
    spotlights[shownSpotlightI].classList.toggle("shown")
    shownSpotlightI = newShownSpotlightI
}