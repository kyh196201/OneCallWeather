import { createElement, $, addEvent } from "../utils/helpers.js";
import SettingsHeader from "./SettingsHeader.js";
import SettingsMain from "./SettingsMain.js";
import { SHOWING_CLASS } from "../utils/constants.js";
import { makeError } from "../utils/validate.js";

function SettingsFooter({ $target }) {
  this.$target = $target;
  const $footer = createElement("footer");
  $footer.className = "settings__footer";
  $footer.innerHTML = `<p>App ver 0.0.1</p>`;
  this.$footer = $footer;

  if ($target) {
    this.$target.appendChild(this.$footer);
    return;
  } else {
    throw makeError("Parameter Missing", "Parameter Error");
  }
}

class Settings {
  constructor({ $target, visible, onClose }) {
    if (!(this instanceof Settings)) {
      throw makeError(
        "New 키워드 없이 실행했습니다. In Settings",
        "New키워드에러"
      );
    }
    try {
      this.$target = $target;
      this.visible = visible;
      this.onClose = onClose;

      const $settings = createElement("section");
      $settings.classList.add("settings");
      this.$settings = $settings;

      // Settings Header
      this.$settingsHeader = new SettingsHeader({
        $target: this.$settings,
        onClick: this.onClose,
      });

      // Settings Main
      this.$settingsMain = new SettingsMain({ $target: this.$settings });

      // Settings Footer
      this.$settingsFooter = new SettingsFooter({ $target: this.$settings });

      this.$target.appendChild(this.$settings);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  render = () => {
    if (this.visible) {
      this.$settings.classList.add(SHOWING_CLASS);
      window.onkeydown = (e) => {
        if (e.keyCode === 27) {
          this.onClose();
        }
      };
    } else {
      this.$settings.classList.remove(SHOWING_CLASS);
    }
  };

  setState = (newData) => {
    this.visible = newData.visible;
    this.render();
  };
}

export default Settings;
