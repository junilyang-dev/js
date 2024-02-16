const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "0ea448976872c92efc348b7a334be436";
const weatherIcon = {        '01' : 'fas fa-sun',        '02' : 'fas fa-cloud-sun',        '03' : 'fas fa-cloud',        '04' : 'fas fa-cloud-meatball',        '09' : 'fas fa-cloud-sun-rain',        '10' : 'fas fa-cloud-showers-heavy',        '11' : 'fas fa-poo-storm',        '13' : 'far fa-snowflake',        '50' : 'fas fa-smog'      };

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      city.innerText = data.name;
      const weatherIconData =  (data.weather[0].icon).substr(0,2);
      weather.innerHTML = `<i class="${weatherIcon[weatherIconData]}"></i> ${data.weather[0].main}  ${data.main.temp}℃`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);