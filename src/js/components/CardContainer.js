import { $, createElement } from "../utils/helpers.js";
import card from "./card.js";
import { makeError } from "../utils/validate.js";

class CardContainer {
  constructor({ $target, data }) {
    this.$target = $target;
    this.data = data;
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

      this.myslider = new Swiper(".card-container");

      this.render();
    } catch (err) {
      console.log(err);
      throw makeError(err.message, "SomeThingWrong");
    }
  }

  render = () => {
    let htmlString = "";
    let i = 0;
    while (i < this.data.length) {
      htmlString += card(this.data[i]);
      i++;
    }
    this.$cardWrapper.innerHTML = htmlString;

    this.myslider.update();
  };

  setState = (newData) => {
    this.data = newData;
    this.render();
  };
}

export default CardContainer;
