// Card weather temp
const weatherTemp = (data) => {
  // Data Validation
  return `
    <section class="card__weather-temp">
        <span class="big-temp">22</span>
        <span class="big-temp-symbol">&#186;</span>
    </section>
    `;
};

const weatherTodayInfo = (data) => {
  // Data validation
  return `
    <section class="card__weather-todayInfo">
        <div class="todayInfo__top">
        <span class="todayInfo__icon">
            <i class="fas fa-cloud"></i>
        </span>
        <span class="todayInfo__today">today</span>
        </div>
        <div class="todayInfo__bottom">
        <div class="todayInfo__highTemp">
            <span class="highTemp__icon todayInfo__icon">
                <i class="fas fa-long-arrow-alt-up"></i>
            </span>
            <span class="highTemp__temp small-temp">22</span>
        </div>
        <div class="todayInfo__lowTemp">
            <span class="lowTemp__icon todayInfo__icon">
                <i class="fas fa-long-arrow-alt-down"></i>
            </span>
            <span class="lowTemp__temp small-temp">16</span>
            <span class="low-temp-symbol">&#186;</span>
        </div>
        </div>
    </section>
    `;
};

// Card Img Wrapper
const cardImgWrapper = (data) => {
  // Data validation
  return `
    <article class="card__img-wrapper">
        <section class="card__img">
            <img src="./src/images/weather/rain.svg" alt="" />
        </section>
    </article>
    `;
};

// Card Greeting Wrapper
const cardGreetingWrapper = (data) => {
  // Data Validation
  return `
    <article class="card__greeting-wrapper">
        <p class="card__greeting">
        You might need this
        </p>
    </article>
    `;
};

// Card Weather Contianer
const cardWeatherContainer = (data) => {
  // Data Validation
  return (
    '<div class="card__weather-wrapper">' +
    weatherTemp() +
    weatherTodayInfo() +
    "</div>"
  );
};

const cardContent = (data) => {
  // Data Validation
  return (
    ' <section class="card__content">' +
    cardImgWrapper() +
    cardGreetingWrapper() +
    cardWeatherContainer() +
    "</section>"
  );
};

export default cardContent;
