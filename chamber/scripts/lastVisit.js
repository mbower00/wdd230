const lastVisitEl = document.getElementById("last-visit-text")

let lastVisitDate = window.localStorage.getItem("lastVisit") || null
if (lastVisitDate !== null) {
    lastVisitDate *= 1
}

const currentDate = Date.now()
window.localStorage.setItem("lastVisit", currentDate)

let displayText = ""

// console.log(`nice ${currentDate} - ${lastVisitDate} (in days)= ${(currentDate - lastVisitDate) / 86400000}`)

if (lastVisitDate === null) {
    displayText = "Welcome! Let us know if you have any questions."
} else {
    const daysSince = Math.floor((currentDate - lastVisitDate) / 86400000)
    
    if (daysSince < 1) {
        displayText = "Back so soon! Awesome!"
    } else {
        if (daysSince > 1) { // more than one
            displayText = `You visited ${daysSince} days ago`
        } else { // is one
            displayText = `You visited ${daysSince} day ago`
        }
    }
}

lastVisitEl.textContent = displayText

