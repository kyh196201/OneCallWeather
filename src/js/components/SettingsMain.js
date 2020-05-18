import { makeError } from "../utils/validate.js";
import { createElement, addEvent, $ } from "../utils/helpers.js";
import SettingsList from "./SettingsList.js";
import SettingsUserDetail from "./SettingsUserDetail.js";

function SettingsMain({ $target }) {
  if (!(this instanceof SettingsMain)) {
    throw makeError(
      "New 키워드 없이 실행했습니다. In SettingsMain",
      "New키워드에러"
    );
  }
  try {
    this.$target = $target;

    const $main = createElement("main");
    $main.className = "settings__main";
    this.$main = $main;

    const $section = createElement("section");
    $section.className = "settings__main__wrapper";
    this.$section = $section;

    this.$main.appendChild(this.$section);
    this.$target.appendChild(this.$main);

    // Settings List
    this.settingsList = new SettingsList({ $target: this.$section });

    // Settings Userdetail
  } catch (err) {
    console.error(err);
    throw makeError("오류 발생 콘솔창을 확인해주세요!", "SomeError");
  }

  return;
}

export default SettingsMain;
