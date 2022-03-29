//*vamos a usar esta api: https://openweathermap.org/api
//https://openweathermap.org/current
//* códigos status: https://developer.mozilla.org/es/docs/Web/HTTP/Status

const container = document.getElementById("container");
const searchCity = document.getElementById("searchCity");
const searchInput = document.getElementById("searchInput");
const currentTemp = document.getElementById("currentTemp");
const icon = document.getElementById("icon");
const iconDesc = document.getElementById("iconDesc");
const ciudad = document.getElementById("ciudad");
const min = document.getElementById("min");
const max = document.getElementById("max");


//*funcion para mostrar los datos:
const displayInfo = (data) => {
    currentTemp.innerHTML = data.main.temp;
    ciudad.innerHTML = data.name;
    icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    iconDesc.innerHTML = data.weather[0].description;
    min.innerHTML = data.main.temp_min;
    max.innerHTML = data.main.temp_max;
}

const getCityWeather = async(city) => {


    const APIkey = "d0c81f539747596641485b095cf691a1";

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=sp&appid=${APIkey}`

    const response = await fetch(api)   //lo que nos va a traer en esta linea se llama Response
    const data = await response.json()  // acá los datos "legibles"

    // console.log(response);
    // console.log(data);
    //*le pasams los datos a la funcion de arriba
    displayInfo(data)
}


//*buscador:
searchCity.addEventListener("submit", (e) => {
    //*evita que recargue la pagina
    e.preventDefault() //el default de este evento es recargar
    console.log(searchInput.value);
    getCityWeather(searchInput.value)
})

//* forma "buena" de pasar la ciudad default:
//cuando termine de cargar la ventana, hace lo que diga dentro de la funcion
window.onload = () => {
    getCityWeather("San Juan")
}