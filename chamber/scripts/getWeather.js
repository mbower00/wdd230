// from GOOGLE MAPS
const LAT = 34.17
const LON = -80.79

// from OPEN WEATHER
const KEY = '1d85527162b7102173658d32b90bd2f5'
const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${KEY}&units=imperial`
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${KEY}&units=imperial`

const currentDescriptionEl = document.getElementById("weather-current-description")
const currentTempEl = document.getElementById("weather-current-temp")
const currentIconEl = document.getElementById("weather-current-icon")

const d1DayEl = document.getElementById("d1-day")
const d1TimeEl = document.getElementById("d1-time")
const d1IconEl = document.getElementById("d1-icon")
const d1TempEl = document.getElementById("d1-temp")
const d1DescriptionEl = document.getElementById("d1-description")

const d2DayEl = document.getElementById("d2-day")
const d2TimeEl = document.getElementById("d2-time")
const d2IconEl = document.getElementById("d2-icon")
const d2TempEl = document.getElementById("d2-temp")
const d2DescriptionEl = document.getElementById("d2-description")

const d3DayEl = document.getElementById("d3-day")
const d3TimeEl = document.getElementById("d3-time")
const d3IconEl = document.getElementById("d3-icon")
const d3TempEl = document.getElementById("d3-temp")
const d3DescriptionEl = document.getElementById("d3-description")

function getWeatherIcon(iconCode) {
    // from OPEN WEATHER
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`
}

function numberToDay(num) {
    switch (num) {
        case 0:
            return "Sun"
        case 1:
            return "Mon"
        case 2:
            return "Tues"
        case 3:
            return "Wed"
        case 4:
            return "Thurs"
        case 5:
            return "Fri"
        case 6:
            return "Sat"
    }
}
function dayFromDate(date) {
    return numberToDay(new Date(date).getDay())
}
function zeroPadding(num) {
    if (num < 10) {
        return `0${num}`
    } else {
        return `${num}`
    }
}
function timeFromDate(date) {
    return `${new Date(date).getHours()}:${zeroPadding(new Date(date).getMinutes())}`
}

async function getWeather() {
    const responseCurrentWeather = await fetch(currentURL)
    const dataCurrentWeather = await responseCurrentWeather.json()
    
    // console.log(dataCurrentWeather)

    currentDescriptionEl.textContent = dataCurrentWeather.weather[0].description
    currentTempEl.textContent = dataCurrentWeather.main.temp
    currentIconEl.setAttribute("src", getWeatherIcon(dataCurrentWeather.weather[0].icon))

    const responseForecastWeather = await fetch(forecastURL)
    const dataForecastWeather = await responseForecastWeather.json()
    let forecast = dataForecastWeather.list

    // console.log(dataForecastWeather)

    // console.log(forecast)
    forecast = forecast.filter((f) => {
        const dt = f.dt_txt
        if (new Date(dt).getDay() === new Date().getDay()) { // must not be today
            return false
        } else if (new Date(dt).getHours() != 12) { // must not be anything but 12
            return false
        } else {
            return true
        }
    })
    

    const oneDayForecast = forecast[0]
    const oneDayTemp = oneDayForecast.main.temp
    const oneDayDescription = oneDayForecast.weather[0].description
    const oneDayIcon = oneDayForecast.weather[0].icon
    const oneDayDay = dayFromDate(oneDayForecast.dt_txt)
    const oneDayTime = timeFromDate(oneDayForecast.dt_txt)

    const twoDayForecast = forecast[1]
    const twoDayTemp = twoDayForecast.main.temp
    const twoDayDescription = twoDayForecast.weather[0].description
    const twoDayIcon = twoDayForecast.weather[0].icon
    const twoDayDay = dayFromDate(twoDayForecast.dt_txt)
    const twoDayTime = timeFromDate(twoDayForecast.dt_txt)

    const threeDayForecast = forecast[2]
    const threeDayTemp = threeDayForecast.main.temp
    const threeDayDescription = threeDayForecast.weather[0].description
    const threeDayIcon = threeDayForecast.weather[0].icon
    const threeDayDay = dayFromDate(threeDayForecast.dt_txt)
    const threeDayTime = timeFromDate(threeDayForecast.dt_txt)

    d1DayEl.textContent = oneDayDay
    d1TimeEl.textContent = oneDayTime
    d1IconEl.setAttribute("src", getWeatherIcon(oneDayIcon))
    d1TempEl.innerHTML = `${oneDayTemp}&deg;F`
    d1DescriptionEl.textContent = oneDayDescription

    d2DayEl.textContent = twoDayDay
    d2TimeEl.textContent = twoDayTime
    d2IconEl.setAttribute("src", getWeatherIcon(twoDayIcon))
    d2TempEl.innerHTML = `${twoDayTemp}&deg;F`
    d2DescriptionEl.textContent = twoDayDescription

    d3DayEl.textContent = threeDayDay
    d3TimeEl.textContent = threeDayTime
    d3IconEl.setAttribute("src", getWeatherIcon(threeDayIcon))
    d3TempEl.innerHTML = `${threeDayTemp}&deg;F`
    d3DescriptionEl.textContent = threeDayDescription
}

getWeather()