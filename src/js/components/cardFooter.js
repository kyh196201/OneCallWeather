import { createElement } from "../utils/helpers.js";
import Swiper from "https://unpkg.com/swiper/js/swiper.esm.browser.bundle.min.js";

const cardFooter = (data) => {
  //Data Validation

  const makeHTMLString = () => {
    // return this.data.map((d) => console.log(d)).join("");
    return `<article class="weekly-weather swiper-slide today">
                    <span class="weekly-weather__day">wed</span>
                     <span class="weekly-weather-icon"
                        ><i class="fas fa-cloud"></i
                        ></span>
                        <span class="weekly-weather-temp">
                        <span class="weekly-small-temp">16</span>
                        <span class="weekly-small-symbol">&#186;</span>
                        </span>
                    </article>
                    <article class="weekly-weather swiper-slide">
                        <span class="weekly-weather__day">wed</span>
                        <span class="weekly-weather-icon"
                        ><i class="fas fa-cloud"></i
                        ></span>
                        <span class="weekly-weather-temp">
                        <span class="weekly-small-temp">16</span>
                        <span class="weekly-small-symbol">&#186;</span>
                        </span>
                    </article>
                    <article class="weekly-weather swiper-slide">
                        <span class="weekly-weather__day">thu</span>
                        <span class="weekly-weather-icon"
                        ><i class="fas fa-cloud"></i
                        ></span>
                        <span class="weekly-weather-temp">
                        <span class="weekly-small-temp">16</span>
                        <span class="weekly-small-symbol">&#186;</span>
                        </span>
                    </article>
                    <article class="weekly-weather swiper-slide">
                        <span class="weekly-weather__day">fri</span>
                        <span class="weekly-weather-icon"
                        ><i class="fas fa-cloud"></i
                        ></span>
                        <span class="weekly-weather-temp">
                        <span class="weekly-small-temp">16</span>
                        <span class="weekly-small-symbol">&#186;</span>
                        </span>
                    </article>
                    <article class="weekly-weather swiper-slide">
                        <span class="weekly-weather__day">sat</span>
                        <span class="weekly-weather-icon"
                        ><i class="fas fa-cloud"></i
                        ></span>
                        <span class="weekly-weather-temp">
                        <span class="weekly-small-temp">16</span>
                        <span class="weekly-small-symbol">&#186;</span>
                        </span>
                    </article>
                    <article class="weekly-weather swiper-slide">
                        <span class="weekly-weather__day">sat</span>
                        <span class="weekly-weather-icon"
                        ><i class="fas fa-cloud"></i
                        ></span>
                        <span class="weekly-weather-temp">
                        <span class="weekly-small-temp">16</span>
                        <span class="weekly-small-symbol">&#186;</span>
                        </span>
                    </article>
                    <article class="weekly-weather swiper-slide">
                        <span class="weekly-weather__day">sat</span>
                        <span class="weekly-weather-icon"
                        ><i class="fas fa-cloud"></i
                        ></span>
                        <span class="weekly-weather-temp">
                        <span class="weekly-small-temp">16</span>
                        <span class="weekly-small-symbol">&#186;</span>
                        </span>
                    </article>`;
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
