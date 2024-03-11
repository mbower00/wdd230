const visitEl = document.getElementById("visit-display")

let visitCount = (window.localStorage.getItem("visitCount") || 0)*1

visitCount++;

let visitMessage 

if (visitCount === 1) {
    visitMessage = "1 (Your first visit!)"
} else {
    visitMessage = visitCount
}

window.localStorage.setItem('visitCount', visitCount)

visitEl.textContent = visitMessage