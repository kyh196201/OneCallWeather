import cardHeader from "./cardHeader.js";
import cardContent from "./cardContent.js";
import cardFooter from "./cardFooter.js";
import { createElement } from "../utils/helpers.js";

const card = (data) => {
  // Data validation

  const { current, daily } = data;
  const id = current.weather[0].id;
  const _id = id.toString();
  let main = "";
  if (_id.substr(0, 1) === "7") {
    main = "clouds";
  } else {
    main = current.weather[0].main.toLowerCase();
  }

  const $card = createElement("div");
  $card.classList.add("card", "swiper-slide");

  const makeHTMLString = () => {
    $card.classList.add(main, current.name.toLowerCase());
    $card.dataset.city = current.name.toLowerCase();
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
