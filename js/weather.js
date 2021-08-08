const API_KEY = "64e85a1603c9f8ee32be8fc8c0d0a2d6";

function drawWeather(data) {
    console.log(data);
    const city = data.name;
    const weather = data.weather[0].main;
    const celsiusTemp = data.main.temp;
    const weatherContainer = document.querySelector(".weather-section");
    weatherContainer.querySelector("div:first-child").innerText = city;
    weatherContainer.querySelector("div:last-child").innerText = `${celsiusTemp}℃ ${weather}`; 
}


function onGeoSuccess(position) {
    const latlon = [position.coords.latitude, position.coords.longitude] ;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latlon[0]}&lon=${latlon[1]}&units=metric&appid=${API_KEY}`;
    fetch(URL)
        .then(response => response.json())
        .then(data => drawWeather(data));
}
function onGeoError() {
    alert("Can't find you. We are setting default location as yours.")
    const latlon = [37.57986, 126.97711]
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latlon[0]}&lon=${latlon[1]}&units=metric&appid=${API_KEY}`;
    fetch(URL)
        .then(response => response.json())
        .then(data => drawWeather(data));
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);