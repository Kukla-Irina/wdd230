const currentTemp = document.querySelector("#temp");
const windSp = document.querySelector("#winds");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#cur");
const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad,us&appid=80034b09e0635c9b96d941eda3733121&units=imperial&&lang=eng";

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

function displayResults(weatherData) {
  temp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  hum.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
}

const apiURL_forecast =
  "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad,us&appid=80034b09e0635c9b96d941eda3733121&units=imperial&&lang=eng";

fetch(apiURL_forecast)
  .then((response) => response.json())
  .then((jsObject) => {
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    var data = jsObject.list.filter((element) =>
      element.dt_txt.includes("00:00:00")
    );
    console.log(data);

    var dayOfWeek = document.getElementsByClassName("forecast-day");
    var weatherIcon = document.getElementsByClassName("weather-icon");
    var tempMax = document.getElementsByClassName("forecast-max");

    for (var i = 0; i < data.length - 2; i++) {
      var d = new Date(data[i].dt_txt);
      dayOfWeek[i].textContent = weekday[d.getDay()];

      const imagesrc =
        "https://openweathermap.org/img/w/" + data[i].weather[0].icon + ".png";
      const description = data[i].weather[0].description;
      weatherIcon[i].setAttribute("src", imagesrc);
      weatherIcon[i].setAttribute("alt", description);

      tempMax[i].innerHTML = Math.round(data[i].main.temp_max) + " &#176;F";
    }
  });
