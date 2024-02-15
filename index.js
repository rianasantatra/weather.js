/**
 * const container
 * const search
 * const weatherBox
 * const weatherDetails
 * const error404
 */
const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");

/**
 * event for search box input
 * const APIKeys
 * const city
 */
search.addEventListener("click", () => {
  const APIKeys = "21d8a80b3d6b444998a80b3d6b1449d3";
  const city = document.querySelector(".search-box input").value;

  if (city === "") return;
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&unit=metric&appid=${APIkey}`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cod === "404") {
        container.style.height = "400px";
        weatherBox.style.display = "none";
        weatherDetails.style.display = "none";
        error404.style.display = "block";
        error404.classList.add("fadeIn");
        return;
      }
      error404.style.display = "none";
      error404.classList.remove("fadeIn");
    });
});
