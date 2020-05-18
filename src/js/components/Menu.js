import { $, createElement, addEvent } from "../utils/helpers.js";
import { makeError } from "../utils/validate.js";
import { SHOWING_CLASS, DROPDOWN_CLASS } from "../utils/constants.js";

class Menu {
  constructor({ $target }) {
    this.$target = $target;

    try {
      // Menu Wrapper
      const $menuWrapper = createElement("section");
      $menuWrapper.className = "card__menu-wrapper";
      this.$menuWrapper = $menuWrapper;

      // Menu
      const $menu = createElement("div");
      $menu.className = "card__menu";
      this.$menu = $menu;

      // Menu List
      const $menuList = createElement("ul");
      $menuList.className = "menu__list";
      this.$menuList = $menuList;

      // Menu Button

      const $menuButton = createElement("button");
      $menuButton.className = "card__menu-button";
      this.$menuButton = $menuButton;
      this.$menuButton.innerHTML = ` <i class="fas fa-bars"></i>`;

      // Append
      this.$menu.appendChild(this.$menuList);
      this.$menuWrapper.appendChild(this.$menu);
      this.$menuWrapper.appendChild(this.$menuButton);
      this.$target.appendChild(this.$menuWrapper);

      this.$menuList.innerHTML = ` 
        <li class="menu__list__item">
            <button class="settings-button" data-goto="settings">
            <i class="fas fa-cog"></i>
            </button>
        </li>
        <li class="menu__list__item">
            <button class="reload-button" >
            <i class="fas fa-sync-alt"></i>
            </button>
        </li>
        <li class="menu__list__item">
            <button class="search-button" data-goto="search-section">
            <i class="fas fa-search"></i>
            </button>
        </li>`;

      this.bindEvents();
    } catch (err) {
      console.error(err);
      throw makeError("오류 발생 콘솔창을 확인해주세요!", "SomeError");
    }
  }

  bindEvents = () => {
    addEvent(this.$menuButton, "click", (e) => {
      this.$menuList.classList.toggle(DROPDOWN_CLASS);
    });

    addEvent(this.$menuList, "click", (e) => {
      const target = e.target;
      this.$menuList.classList.toggle(DROPDOWN_CLASS);
      if (target && target.nodeName === "BUTTON" && target.dataset.goto) {
        const goto = "." + target.dataset.goto;
        $(goto).classList.toggle(SHOWING_CLASS);
        console.log(goto);
      } else if (target.className === "reload-button") {
        console.log("reload data");
      } else {
        return;
      }
    });
  };
}

export default Menu;
