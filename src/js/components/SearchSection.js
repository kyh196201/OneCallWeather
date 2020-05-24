import { makeError } from "../utils/validate.js";
import { createElement, addEvent } from "../utils/helpers.js";
import Search from "./Search.js";
import SearchHistory from "./SearchHistory.js";
import { SHOWING_CLASS } from "../utils/constants.js";

class SearchSection {
  constructor({
    $target,
    data,
    visible,
    onSearch,
    onClose,
    onClick,
    onDelete,
  }) {
    if (!(this instanceof SearchSection)) {
      throw makeError(
        "New 키워드 없이 실행했습니다. In SearchSection",
        "New키워드에러"
      );
    }

    // validate

    this.$target = $target;
    this.data = data;
    this.visible = visible || false;
    this.onSearch = onSearch;
    this.onClose = onClose;
    this.onClick = onClick;
    this.onDelete = onDelete;

    // SearchSection
    const $searchSection = createElement("section");
    $searchSection.className = "search-section";
    this.$searchSection = $searchSection;

    // SearchWrapper
    const $searchWrapper = createElement("div");
    $searchWrapper.className = "search-wrapper";
    this.$searchWrapper = $searchWrapper;

    this.$searchSection.appendChild(this.$searchWrapper);
    this.$target.appendChild(this.$searchSection);

    // Search
    this.search = new Search({
      $target: this.$searchWrapper,
      onSearch: this.onSearch,
      onClose: this.onClose,
    });

    // SearchHistory
    this.searchHistory = new SearchHistory({
      $target: this.$searchWrapper,
      data: this.data,
    });
    this.render();
    this.bindEvents();
  }
  render = () => {
    if (this.visible) {
      this.$searchSection.classList.add(SHOWING_CLASS);
      console.log(this.data);
      this.searchHistory.setState(this.data);
      window.onkeydown = (e) => {
        if (e.keyCode === 27) {
          this.onClose();
        }
      };
    } else {
      this.$searchSection.classList.remove(SHOWING_CLASS);
    }
  };

  setState = (newData) => {
    this.data = newData.historyData;
    this.visible = newData.visible;
    this.render();
  };

  bindEvents = () => {
    addEvent(this.$searchSection, "click", (e) => {
      const target = e.target;
      if (!target) {
        return;
      } else if (
        target.classList.contains("search-section") ||
        target.classList.contains("search__returnButton")
      ) {
        this.onClose();
      } else if (target.classList.contains("searchHistory__list__item")) {
        const city = target.dataset.city.trim();
        this.onClick(city);
      } else if (target.classList.contains("searchHistory__deleteButton")) {
        const parent = target.parentNode;
        if (!parent) {
          return;
        }
        const id = parent.dataset.id;
        if (confirm("기록을 삭제하시겠습니까??")) {
          this.onDelete(id);
        }
      } else {
        return;
      }
    });
  };
}

export default SearchSection;
