import { createElement } from "../utils/helpers.js";
import { DAYS, WEATHER_CASES } from "../utils/constants.js";

const cardFooter = (data) => {
  //Data Validation
  console.log(data);
  const { daily } = data;
  const newDaily = daily.slice(1, 6);

  const makeHTMLString = () => {
    const htmlString = newDaily
      .map((d, index) => {
        const { temp, weather, dt } = d;
        const climate = weather[0].main.toLowerCase();
        console.log(climate);
        const now = new Date(Number(dt) * 1000);
        const day = DAYS[now.getDay()];
        const TODAY_CLASS = index === 0 ? "today" : "";
        return ` 
      <article class="weekly-weather swiper-slide ${TODAY_CLASS}">
        <span class="weekly-weather__day">${day}</span>
        <span class="weekly-weather-icon">
          <i class="fas fa-cloud"></i>
        </span>
        <span class="weekly-weather-temp">
        <span class="weekly-small-temp">
          <span class="highTemp__icon todayInfo__icon">
            <i class="fas fa-long-arrow-alt-up"></i>
          </span>
          <span class="small-temp-max">${Math.ceil(temp.max)}</span>
          <span class="highTemp__icon todayInfo__icon">
            <i class="fas fa-long-arrow-alt-down"></i>
          </span>
          <span class="small-temp-min">${Math.floor(temp.min)}</span>
        </span>
        <span class="weekly-small-symbol">&#186;</span>
        </span>
      </article>`;
      })
      .join("");
    return htmlString;
  };

  const $footer = createElement("footer");
  $footer.className = "card__footer";

  const $weeklyWeatherCont = createElement("section");
  $weeklyWeatherCont.classList.add(
    "weekly-weather-container",
    "swiper-container"
  );

  const $weeklyWeatherWrapper = createElement("div");
  $weeklyWeatherWrapper.classList.add(
    "weekly-weather-wrapper",
    "swiper-wrapper"
  );

  $weeklyWeatherCont.appendChild($weeklyWeatherWrapper);
  $footer.appendChild($weeklyWeatherCont);

  $weeklyWeatherWrapper.innerHTML = makeHTMLString();

  return $footer.outerHTML;
};
export default cardFooter;
