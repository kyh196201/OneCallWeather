import { createElement, $, addEvent } from "../utils/helpers.js";
import { SHOWING_CLASS } from "../utils/constants.js";

const searchHeader = () => {
  const htmlString = `
                    <header class="search__header">
                        <button class="search__returnButton">
                            <i class="fas fa-arrow-left"></i>
                        </button>
                        <h2 class="search__title">Search City</h2>
                    </header>`;
  return htmlString;
};

const searchForm = () => {
  const htmlString = `
    <div class="search__form-wrapper">
        <form action="/search-city" class="search__form" method="get">
            <div class="search__form__input">
                <input type="text" name="city" autocomplete="off"/>
                <button><i class="fas fa-search"></i></button>
            </div>
        </form>
    </div>
    `;
  return htmlString;
};

class Search {
  constructor({ $target, onSearch, onClose }) {
    if (!(this instanceof Search)) {
      throw makeError(
        "New 키워드 없이 실행했습니다. In Search",
        "New키워드에러"
      );
    }

    this.$target = $target;
    this.onSearch = onSearch;
    this.onClose = onClose;

    const $search = createElement("section");
    $search.className = "search";
    this.$search = $search;

    this.$target.appendChild(this.$search);

    this.render();
    setTimeout(() => {
      this.bindEvents();
    });
  }

  render = () => {
    this.$search.innerHTML = searchHeader() + searchForm();
  };

  bindEvents = () => {
    addEvent($(".search__form"), "submit", (e) => {
      e.preventDefault();
      const input = e.target.city;
      if (!input) return;
      const value = input.value.toLowerCase();
      if (!value) {
        alert("도시 이름을 입력해주세요!!");
        return;
      }
      this.onClose();
      this.onSearch(value);
      input.value = "";
      input.focus();
    });
  };
}

export default Search;
