const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");

const getInfo = (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = `Enter city to proceed`;
  } else {
    try {
      let url = `api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=41efb566b41e3552fba27524494909fd`;
      const res = await fetch(url);
    } catch {
      city_name.innerText = `please enter city name`;
    }
  }
};
submitBtn.addEventListener("click", getInfo);
