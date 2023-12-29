

const apiKey = "1d9b53da6341fe20dfd4ae6dce0c0cbc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


async function checkWeather(city){
    
    const response = await fetch(apiUrl  + city + `&appid=${apiKey}`);
    const data =  await  response.json();

    //console.log(data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


    const weather_img = document.querySelector(".weather-icon");
    switch(data.weather[0].main){
        case 'Clouds':
            weather_img.src = "images/clouds.png";
            break;
        case 'Clear':
            weather_img.src = "images/clear.png";
            break;
        case 'Rain':
            weather_img.src = "images/rain.png";
            break;
        case 'Mist':
            weather_img.src = "images/mist.png";
            break;
        case 'Snow':
            weather_img.src = "images/snow.png";
            break;

    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
}
);