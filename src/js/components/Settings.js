import { createElement, $, addEvent } from "../utils/helpers.js";
import SettingsHeader from "./SettingsHeader.js";
import SettingsMain from "./SettingsMain.js";
import { SHOWING_CLASS } from "../utils/constants.js";

class Settings {
  constructor({ $target }) {
    if (!(this instanceof Settings)) {
      throw makeError(
        "New 키워드 없이 실행했습니다. In Settings",
        "New키워드에러"
      );
    }
    try {
      this.$target = $target;

      const $settings = createElement("section");
      $settings.classList.add("settings", "showing");
      this.$settings = $settings;

      // Settings Header
      this.$settingsHeader = new SettingsHeader({
        $target: this.$settings,
        onClick: this.onCloseSettings,
      });

      // Settings Main
      this.$settingsMain = new SettingsMain({ $target: this.$settings });

      this.$target.appendChild(this.$settings);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  onCloseSettings = () => {
    this.$settings.classList.toggle(SHOWING_CLASS);
  };
}

export default Settings;
