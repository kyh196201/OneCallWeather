import { makeError } from "../utils/validate.js";
import { createElement, addEvent } from "../utils/helpers.js";

function SettingsHeader({ $target, onClick }) {
  if (!(this instanceof SettingsHeader)) {
    throw makeError(
      "New 키워드 없이 실행했습니다. In SettingsHeader",
      "New키워드에러"
    );
  }
  try {
    this.$target = $target;
    this.onClick = onClick;

    const $header = createElement("header");
    $header.className = "settings__header";
    this.$header = $header;

    const $button = createElement("button");
    $button.className = "settings__returnButton";
    this.$button = $button;
    this.$button.innerHTML = `<i class="fas fa-arrow-left"></i>`;

    const $title = createElement("h2");
    $title.className = "settings__title";
    this.$title = $title;
    this.$title.textContent = "Settings";

    this.$header.appendChild(this.$button);
    this.$header.appendChild(this.$title);
    this.$target.appendChild(this.$header);

    addEvent(this.$button, "click", (e) => {
      e.stopPropagation();
      this.onClick();
    });
  } catch (err) {
    throw err;
  }
}

export default SettingsHeader;
