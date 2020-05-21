import { createElement, $, addEvent } from "../utils/helpers.js";
import { SHOWING_CLASS } from "../utils/constants.js";
import { makeError } from "../utils/validate.js";

const searchHistoryHeader = () => {
  const htmlString = `
    <header class="searchHistory__header">
        <h2 class="searchHistory__title">Search History</h2>
        <button class="searchHistory__clearAll">Clear</button>
    </header>
    `;
  return htmlString;
};

const searchHistoryList = (data) => {
  if (!data) {
    throw makeError("Data not Exits", "Parameter Error");
  }
  const htmlString = data.map((d) => {
    return ` 
      <li class="searchHistory__list__item">
          <span class="searchHistory__city">${d}</span>
          <button class="searchHistory__deleteButton">
            <i class="fas fa-times"></i>
          </button>
      </li>`;
  });
  return `<ul class="searchHistory__list">${htmlString}</ul>`;
};

class SearchHistory {
  constructor({ $target, data }) {
    if (!(this instanceof SearchHistory)) {
      throw makeError(
        "New 키워드 없이 실행했습니다. In SearchHistory",
        "New키워드에러"
      );
    }

    this.$target = $target;
    this.data = data;
    console.log(this.data);
    const $searchHistory = createElement("section");
    $searchHistory.className = "searchHistory";
    this.$searchHistory = $searchHistory;

    this.$target.appendChild(this.$searchHistory);

    this.render();
  }

  render = () => {
    this.$searchHistory.innerHTML =
      searchHistoryHeader() + searchHistoryList(this.data);
  };

  setState = (newData) => {
    this.data = newData;
    this.render();
  };
}

export default SearchHistory;
