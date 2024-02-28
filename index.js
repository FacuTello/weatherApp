'use strict'
const button = document.getElementById("btn-search");

function searchCityWeather(){
    const input = document.querySelector('.input-search').value;
    let peticion = fetch("https://api.weatherapi.com/v1/forecast.json?key=534a48d967bf4420a33190751241701&q=" + input + "&lang=es&days=5");
peticion
    .then(res => res.json())
    .then(res => {
        console.log(res);
          showCurrentInformationInDOM(res);
    });
}

function showCurrentInformationInDOM(res){
           let cityName = res.location.name;
           let cityCountry = res.location.country
           const divCity = document.getElementById('cityContainer');
           divCity.textContent = `${cityName}, ${cityCountry}`;
           const divTextTemp = document.getElementById('textTemp');
           const textTemp = res.current.condition.text;
           divTextTemp.textContent = textTemp;
           const imgContainer = document.getElementById('imageWeather');
           imgContainer.src = res.current.condition.icon;
           const tempDiv = document.getElementById('temperature');
           let cityTemp = res.current.temp_c;
           tempDiv.textContent = `${cityTemp}° grados`;
}

button.addEventListener('click', searchCityWeather);





