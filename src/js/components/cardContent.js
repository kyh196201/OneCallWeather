import { WEATHER_CASES } from "../utils/constants.js";

// Card weather temp

const weatherTemp = (data) => {
  // Data Validation
  const { now } = data;
  return ` 
    <section class="card__weather-temp">
        <span class="big-temp">${Math.floor(now)}</span>
        <span class="big-temp-symbol">&#186;</span>
    </section>
    `;
};

const weatherTodayInfo = (data) => {
  // Data validation
  const { climate, max, min } = data;
  return `
    <section class="card__weather-todayInfo">
        <div class="todayInfo__top">
        <span class="todayInfo__icon">
          ${WEATHER_CASES[climate].icon}
        </span>
        <span class="todayInfo__today">today</span>
        </div>
        <div class="todayInfo__bottom">
        <div class="todayInfo__highTemp">
            <span class="highTemp__icon todayInfo__icon">
                <i class="fas fa-long-arrow-alt-up"></i>
            </span>
            <span class="highTemp__temp small-temp">${Math.ceil(max)}</span>
        </div>
        <div class="todayInfo__lowTemp">
            <span class="lowTemp__icon todayInfo__icon">
                <i class="fas fa-long-arrow-alt-down"></i>
            </span>
            <span class="lowTemp__temp small-temp">${Math.floor(min)}</span>
            <span class="low-temp-symbol">&#186;</span>
        </div>
        </div>
    </section>
    `;
};

// Card Img Wrapper
const cardImgWrapper = (data) => {
  // Data validation
  const { climate } = data;
  return `
    <article class="card__img-wrapper">
        <section class="card__img">
          <img src="${WEATHER_CASES[climate].img}" alt="" /> 
        </section>
    </article>
    `;
};

// Card Greeting Wrapper
const cardGreetingWrapper = (data) => {
  // Data Validation
  const { climate } = data;
  console.log(climate);

  return `
    <article class="card__greeting-wrapper">
        <p class="card__greeting">
          ${WEATHER_CASES[climate].greeting}
        </p>
    </article>
    `;
};

// Card Weather Contianer
const cardWeatherContainer = (data) => {
  // Data Validation
  const { climate, min, max, now } = data;
  return (
    '<div class="card__weather-wrapper">' +
    weatherTemp({ now }) + //current.main.temp
    weatherTodayInfo({ climate, min, max }) + //current.main.temp_min, current.main.temp_max, current.weather[0].main
    "</div>"
  );
};

const cardContent = (data) => {
  // Data Validation
  const { current, daily } = data;
  const { weather, main } = current;
  const climate = weather[0].main.toLowerCase();
  const { temp } = main;
  const tempObj = daily[0].temp;
  return (
    ' <section class="card__content">' +
    cardImgWrapper({ climate }) + //current.weather[0].main
    cardGreetingWrapper({ climate }) + //current.weather[0].main
    cardWeatherContainer({
      climate,
      min: tempObj.min,
      max: tempObj.max,
      now: temp,
    }) + //current.main.temp_min, current.main.temp_max, current.weather[0].main,current.main.temp
    "</section>"
  );
};

export default cardContent;
