'use strict'


const button = document.getElementById("btn-search");

function searchCityWeather(){
    const input = document.querySelector('.input-search').value;
    let peticion = fetch("https://api.weatherapi.com/v1/forecast.json?key=534a48d967bf4420a33190751241701&q=" + input + "&lang=es&days=5");
peticion
    .then(res => res.json())
    .then(res => {
        console.log(res);
          showInformationInDOM(res);
    });
}

function showInformationInDOM(res){
    let cityName = res.location.name;
           let divCity = document.getElementById('city');
           divCity.textContent = cityName;
}
button.addEventListener('click', searchCityWeather);





