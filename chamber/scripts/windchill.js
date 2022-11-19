
const temperature = document.getElementById('temp').textContent;
const windSpeed = document.getElementById('winds').textContent;

if (temperature > 50 && windSpeed <= 3){

    document.getElementById('windch').textContent = "N/A";
}
else {
    const windChill = (35.74 + (0.6215 * temperature))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temperature*Math.pow(windSpeed,0.16));
    const windChillFinal= Math.round(windChill);

    document.getElementById('windch').textContent = windChillFinal;
}

// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const windSp = document.querySelector('#winds');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Moscow,ru&appid=80034b09e0635c9b96d941eda3733121&units=imperial&&lang=ru';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function  displayResults(weatherData) {
    temp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    winds.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }