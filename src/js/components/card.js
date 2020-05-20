import cardHeader from "./cardHeader.js";
import cardContent from "./cardContent.js";
import cardFooter from "./cardFooter.js";
import { createElement } from "../utils/helpers.js";

const card = (data) => {
  // Data validation
  const $card = createElement("div");
  $card.classList.add("card", "swiper-slide");

  const makeHTMLString = () => {
    const { current, daily } = data;
    const climate = current.weather[0].main.toLowerCase();
    $card.classList.add(climate);
    return (
      cardHeader({ city: current.name, country: current.sys.country }) +
      cardContent({ current, daily }) +
      cardFooter({ daily })
    );
  };

  $card.innerHTML = makeHTMLString();

  return $card.outerHTML;
};

export default card;
