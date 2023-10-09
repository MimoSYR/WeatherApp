
const apiKey = "e8c74d22697f7ffff118b79f97cc4d65";

const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){

    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather-info").style.display = "none";
    } else {

    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity-info h3").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-info h3").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./img/Clear.png";
    } else if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./img/Clouds.png";
    } else if(data.weather[0].main == "Fog"){
        weatherIcon.src = "./img/Fog.png";
    } else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./img/Mist.png";
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./img/Rain.png";
    } else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "./img/Snow.png";
    } else if(data.weather[0].main == "Thunderstorm"){
        weatherIcon.src = "./img/Thunderstorm.png";
    }

    document.querySelector(".weather-info").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

