'use strict'


const button = document.getElementById("btn-search");

function searchCityWeather(){
    const input = document.querySelector('.input-search').value;
    let peticion = fetch("https://api.weatherapi.com/v1/forecast.json?key=534a48d967bf4420a33190751241701&q=" + input + "&lang=es&days=5");
peticion
    .then(res => res.json())
    .then(res => {
           let cityName = res.location.name;
           let divCity = document.getElementById('city');
           divCity.textContent = cityName;
    });

    //.then(res => console.log(res.current.condition.text))
}

button.addEventListener('click', searchCityWeather);
/*let peticion = fetch("https://api.weatherapi.com/v1/forecast.json?key=534a48d967bf4420a33190751241701&q=buenos-aires&lang=es&days=6")
peticion
    .then(res => res.json())
    .then(res => console.log(res))
 /*   .then(res => {
        // Accede a la propiedad 'condition' y luego a 'text'
        const conditionText = res.current.condition.text;

        // Hacer algo con conditionText, como imprimirlo en la consola
        console.log("Texto de la condición:", conditionText);
    })
*/




