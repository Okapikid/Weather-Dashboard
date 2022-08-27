let searchedCity = "";
let submitButtonEl = document.getElementById("");
let stuff;
let cityCall;
let storedArray = [];

const currentTime = moment().format("MMMM Do, YYYY");
const day1 = moment().add(1, "days").format("MMMM Do, YYYY");
const day2 = moment().add(2, "days").format("MMMM Do, YYYY");
const day3 = moment().add(3, "days").format("MMMM Do, YYYY");
const day4 = moment().add(4, "days").format("MMMM Do, YYYY");
const day5 = moment().add(5, "days").format("MMMM Do, YYYY");

$("#date1").text(day1);
$("#date2").text(day2);
$("#date3").text(day3);
$("#date4").text(day4);
$("#date5").text(day5);

let searchHistory = JSON.parse(localStorage.getItem(`previousSearches`));
if (searchHistory === null) {
  searchHistory = [`Cincinnati`];
}

storedArray = searchHistory;
for (let i = 0; i < storedArray.length; i++) {
  if (searchHistory[i] !== null) {
    const city = `<div id='${searchHistory[i]}' class="city">${storedArray[i]}</div>`;
    $(`searchedCities`).append(city);
  }
}

const searchedClick = function () {
  $(".city").on("click", function () {
    const cityCard = $(this).text();
    searchedCity = cityCard;
    cityAPI = `https://api.openweathermap.org/data/2.5/onecall?q=${searchedCity}&appid=da46faa4e2f031a23137502340090190`;
    $("#title").text(`${searchedCity}`);
    getWeather(cityAPI, stuff);
  });
};
searchedClick();

const getWeather = function (cityInfo, stuff) {
  fetch(cityInfo)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      stuff = data;
      const cityApiPull = `https://api.openweathermap.org/data/2.5/onecall?lat=${stuff.coord.lat}&lon=${stuff.coord.lon}&appid=da46faa4e2f031a23137502340090190`;
      fetch(cityApiPull).then(function (res) {
        return res.json().then(function (data) {
          $("#temp").text(`Temp: ${data.temp}`);
          $("#wind").text(`Wind: ${data.wind_speed} MPH`);
          $("#humidity").text(`Humidity ${data.humidity}%`);
          $("#uv").text(`UV Index: ${data.current.uvi}`);
        });
      });
    });
};

$("#submit-btn").on("click", function (e) {
  searchedCity = $(`#search-bar`).val();

  const city = `<div id="${searchedCity}" class="city">${searchHistory}</div>`;
  $("#searchedCities").append(city);
  $("#title").text(`#{searchedCity}`);

  storedArray.push(searchedCity);
  localStorage.setItem("previousSearches", JSON.stringify(storedArray));

  let cityAPI = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=da46faa4e2f031a23137502340090190`;
  $(`.city`).on("click", function () {
    const cityCard = $(this).text();
    searchedCity =
      cityCardcityAPI = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=da46faa4e2f031a23137502340090190`;

    $("#title").text(`${searchedCity}`);
    getWeather(cityAPI, stuff);
  });
  getWeather(cityAPI, stuff);
  e.preventDefault();
});

console.log(day1);
console.log(searchedCity);
