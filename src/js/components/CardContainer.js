import { $, createElement } from "../utils/helpers.js";
import card from "./card.js";
import { makeError } from "../utils/validate.js";

class CardContainer {
  constructor({ $target, data }) {
    this.$target = $target;
    this.data = data;
    this.myslider = null;
    this.myWeeklySlider = null;

    try {
      // Card Conatiner
      const $cardContainer = createElement("section");
      $cardContainer.classList.add("card-container", "swiper-container");
      this.$cardContainer = $cardContainer;

      const $cardWrapper = createElement("div");
      $cardWrapper.classList.add("card-wrapper", "swiper-wrapper");
      this.$cardWrapper = $cardWrapper;

      this.$cardContainer.appendChild(this.$cardWrapper);
      this.$target.appendChild(this.$cardContainer);

      this.render();
    } catch (err) {
      console.log(err);
      throw makeError(err.message, "SomeThingWrong");
    }
  }

  render = () => {
    this.$cardWrapper.innerHTML = card() + card() + card();
    this.myWeeklySlider = new Swiper(".weekly-weather-container", {
      slidesPerView: 5,
    });
    this.myslider = new Swiper(".card-container");
  };

  setState = (newData) => {
    this.data = newData;
    this.render();
  };
}

export default CardContainer;
