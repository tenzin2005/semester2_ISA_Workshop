window.addEventListener("load",defaultWeather)

async function defaultWeather() {
    var city = document.getElementById("search-bar").value;
    var response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=Cambridgeshire&appid=98cbffea2ef6d6011f599f33ae87edde`);
    var data = await response.json();
    console.log(data);
    const cityElement = document.getElementById("city");
    const temperatureElement = document.getElementById("temperature");
    const descriptionElement = document.getElementById("description");
    const pressureElement = document.getElementById("pressure");
    const humidityElement = document.getElementById("humidity");
    const windElement = document.getElementById("wind");
    cityElement.innerHTML = `Weather in ${data.name}`;
    temperatureElement.innerHTML = `${data.main.temp}°C`;
    descriptionElement.innerHTML = data.weather[0].description;
    pressureElement.innerHTML = `Pressure: ${data.main.pressure} hPa`;
    humidityElement.innerHTML = `Humidity: ${data.main.humidity}%`;
    windElement.innerHTML = `Wind: ${data.wind.speed} km/h`;
    var weather_icon = document.getElementById("weather-icon");
    icon = data.weather[0].icon;
    weather_icon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    }

async function fetchWeather() {
    var city = document.getElementById("search-bar").value;
    var response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=98cbffea2ef6d6011f599f33ae87edde`);
    var data = await response.json();
    console.log(data);
    const cityElement = document.getElementById("city");
    const temperatureElement = document.getElementById("temperature");
    const descriptionElement = document.getElementById("description");
    const pressureElement = document.getElementById("pressure");
    const humidityElement = document.getElementById("humidity");
    const windElement = document.getElementById("wind");
    cityElement.innerHTML = `Weather in ${data.name}`;
    temperatureElement.innerHTML = `${data.main.temp}°C`;
    descriptionElement.innerHTML = data.weather[0].description;
    pressureElement.innerHTML = `Pressure: ${data.main.pressure} hPa`;
    humidityElement.innerHTML = `Humidity: ${data.main.humidity}%`;
    windElement.innerHTML = `Wind: ${data.wind.speed} km/h`;
    var weather_icon = document.getElementById("weather-icon");
    icon = data.weather[0].icon;
    weather_icon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    }
    
