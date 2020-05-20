import { makeError } from "../utils/validate.js";
import { createElement, $, addEvent } from "../utils/helpers.js";
import { SHOWING_CLASS } from "../utils/constants.js";

function SettingsUserDetail({ $target }) {
  if (!(this instanceof SettingsUserDetail)) {
    throw makeError(
      "New 키워드 없이 실행했습니다. In SettingsUserDetail",
      "New키워드에러"
    );
  }
  try {
    this.$target = $target;

    const $userDetail = createElement("section");
    $userDetail.className = "settings__userDetail";
    this.$userDetail = $userDetail;

    this.$target.appendChild(this.$userDetail);

    this.$userDetail.innerHTML = `
    <div class="userDetail__userImage">
        <div class="user__avatar big-avatar">
        <img src="./src/images/avatar/avatar1.jpg" alt="" />
        </div>
    </div>
    <div class="userDetail__userName">Seungwoo Kim</div>
    <div class="userDetail__confirmButton">
        <button>OK</button
        ><button class="userDetail__backButton">Back</button>
    </div>`;

    this.bindEvents = () => {
      addEvent(this.$userDetail, "click", (e) => {
        const target = e.target;
        if (target && target.classList.contains("userDetail__backButton")) {
          this.$userDetail.classList.toggle(SHOWING_CLASS);
          $(".settings__list").classList.toggle(SHOWING_CLASS);
        }
      });
    };

    this.bindEvents();
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default SettingsUserDetail;
