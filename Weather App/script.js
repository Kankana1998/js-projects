
const apiKey = "1d9b53da6341fe20dfd4ae6dce0c0cbc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Bangalore&appid={apiKey}";

async function checkWeather(){
    const response = await fetch(apiUrl);
    const data = response.json();

    console.log(data);
}

checkWeather();