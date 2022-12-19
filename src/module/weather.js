import React from "react";

const URL =
  "https://api.openweathermap.org/data/2.5/weather?lat=36.64&lon=127.48&appid=8e5483a098321f91a5ba4dad91ee9d5e";

const response = axios.get(URL, {
  params: {
    serviceKey: process.env.REACT_APP_API_KEY,
    numOfRows: 1,
    pageNo: 10,
  },
});

/** 
const getJSON = function (url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "json";
  xhr.onload = function () {
    const status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

getJSON(
  "([https://api.openweathermap.org/data/2.5/weather?lat=36.64&lon=127.48&appid=8e5483a098321f91a5ba4dad91ee9d5e&units=metric))",
  function (err, data) {
    if (err !== null) {
      alert("예상치 못한 오류 발생." + err);
    } else {
      loadWeather(data);
    }
  }
);

/** 온도는 ${data.main.temp}°
      풍속은 ${data.wind.speed}m/s
      습도는 ${data.main.humidity}%
      최고기온은 ${data.main.temp_max}°
      최저기온은 ${data.main.temp_min}° */
/**
function loadWeather(data) {
  let location = document.querySelector(".location");
  let currentTime = document.querySelector(".current-time");
  let currentTemp = document.querySelector(".current-temp");
  let feelsLike = document.querySelector(".feels-like");
  let minTemp = document.querySelector(".min-temp");
  let maxTemp = document.querySelector(".max-temp");
  let icon = document.querySelector(".icon");
  let weatherIcon = data.weather[0].icon;

  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  location.append([data.name]());
  currentTemp.append(`${data.main.temp}°`);
  feelsLike.append(`${data.main.feels_like}°`);
  maxTemp.append(`최고: ${data.main.temp_max}°`);
  minTemp.append(`최저: ${data.main.temp_min}°`);
  icon.innerHTML = `<img src='<http://openweathermap.org/img/wn/${weatherIcon}.png>'>`;

  currentTime.append(`${month}월 ${day}일 ${hours}:${minutes}`);
}
*/
