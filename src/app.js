function displayTemperature(response) {
 console.log(response.data); 
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descpriptionElement = document.querySelector("#weather-description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descpriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = Math.round(response.data.temperature.humidity);
  windElement.innerHTML = Math.round(response.data.wind.speed);

}

let apiKey = "74207tf2dbea64540ea5c6f390o295e3";
let query = "London";

let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);