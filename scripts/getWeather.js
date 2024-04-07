const tempEl = document.getElementById("weather-temp")
const iconEl = document.getElementById("weather-icon")
const conditionEl = document.getElementById("weather-condition")

// FROM GOOGLE MAPS...
const LAT = 43.82
const LON = -111.79
// FROM https://openweathermap.org/current
const URL = "https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=-111.79&appid=56ba34bdabdae34c444c6cd16df50140&units=imperial"

async function getWeather() {
    const response = await fetch(URL)
    const data = await response.json()
    
    console.log(data)

    const weather = data.weather[0]
    conditionEl.textContent = weather.description
    iconEl.setAttribute('src', `https://openweathermap.org/img/wn/${weather.icon}@2x.png`)

    const temp = data.main.temp
    tempEl.innerHTML = `${temp}&deg;F`
}

getWeather()