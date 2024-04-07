const meetingBannerEl = document.getElementById("meeting-banner")
const xEl = document.getElementById("x")

function setupX() {
    xEl.addEventListener("click", () => {
        meetingBannerEl.style.display = "none"
    })
}

function manageBanner() {
    const day = new Date().getDay()
    if (day === 1 || day === 2 || day === 3 ){
        meetingBannerEl.style.display = "block"
        setupX()
    }
}

manageBanner()