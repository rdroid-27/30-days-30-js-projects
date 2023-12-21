const apiKey = "2fd1e2b4498320f7fe0c9bdd3738d9b4";
const search = document.querySelector("#searchBox");
const btn = document.querySelector("#searchBtn");
btn.addEventListener("click", (e) => {
    getWeather(search.value);
});
const weatherType = ["Clear", "Clouds", "Drizzle", "Mist", "Rain", "Snow"];
const wi=document.querySelector(".weather-icon");

const getWeather = async (city) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  
  if(response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
  }
else{

    document.querySelector(".city").innerHTML = city;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    
    const weatherIcon = data.weather[0].main.toLowerCase();
    for(let i of weatherType){
        if(i.toLowerCase()==weatherIcon){
        console.log(weatherIcon);
        wi.src=`images/${weatherIcon}.png`;
    }
}
document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display="none";
}


};
