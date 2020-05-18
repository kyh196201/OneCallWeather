import cardHeader from "./cardHeader.js";
import cardContent from "./cardContent.js";
import cardFooter from "./cardFooter.js";
import { createElement } from "../utils/helpers.js";

const card = (data) => {
  // Data validation
  const $card = createElement("div");
  $card.classList.add("card", "swiper-slide");

  const makeHTMLString = () => {
    return cardHeader() + cardContent() + cardFooter();
  };

  $card.innerHTML = makeHTMLString();

  return $card.outerHTML;
};

export default card;
