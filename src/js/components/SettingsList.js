import { createElement, $, addEvent } from "../utils/helpers.js";
import { SHOWING_CLASS } from "../utils/constants.js";

function SettingsList({ $target }) {
  if (!(this instanceof SettingsList)) {
    throw makeError(
      "New 키워드 없이 실행했습니다. In SettingsList",
      "New키워드에러"
    );
  }

  try {
    this.$target = $target;

    const $settingsList = createElement("section");
    $settingsList.classList.add("settings__list", SHOWING_CLASS);
    this.$settingsList = $settingsList;

    this.$settingsList.innerHTML = `
        <article class="settings__item settings__user">
            <div class="settings__item__column">
                <div class="user__avatar small-avatar">
                    <img src="./src/images/avatar/avatar1.jpg" alt="" />
                </div>
                <div class="user__id">
                    <span class="user__id__name">Seungwoo Kim</span>
                    <span class="user__text">Edit personal details</span>
                </div>
            </div>
            <div class="settings__item__column">
            <div class="settings__item__button settings__gotoButton settings__user__button">
                <i class="fas fa-chevron-right"></i>
             </div>
              </div>
        </article>
        <!-- Dark Mode -->
        <article class="settings__item settings__darkMode">
            <div class="settings__item__column">
                <div class="settings__item__icon">
                    <span class="item__icon-cover darkMode-cover">
                    <i class="fas fa-moon"></i>
                    </span>
                </div>
                <div class="settings__item__title">Dark Mode</div>
            </div>
            <div class="settings__item__column">
                <div class="settings__item__button settings__toggleButton">
                    <label for="darkMode-checkBox" class="settings__switch">
                    <input
                        type="checkbox"
                        id="darkMode-checkBox"
                        class="settings__checkBox"
                    />
                    <span class="settings__switch__slider"></span>
                    </label>
                </div>
            </div>
        </article>
        <!-- Profile -->
        <div class="settings__list__section settings__profile__section">
            <h2 class="list__section__title">
            Profile
            </h2>
        <div class="list__section__items">
            <article class="settings__item settings__editProfile">
                <div class="settings__item__column">
                    <div class="settings__item__icon">
                        <span class="item__icon-cover editProfile-cover">
                        <i class="fas fa-sticky-note"></i>
                        </span>
                    </div>
                    <div class="settings__item__title">Edit Profile</div>
                </div>
                <div class="settings__item__column">
                    <div class="settings__item__button settings__gotoButton">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>
            </article>
            <article class="settings__item settings__changePassword">
                <div class="settings__item__column">
                    <div class="settings__item__icon">
                        <span class="item__icon-cover changePassword-cover">
                        <i class="fas fa-key"></i>
                        </span>
                    </div>
                <div class="settings__item__title">Change Password</div>
                </div>
                <div class="settings__item__column">
                    <div class="settings__item__button settings__gotoButton">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>
            </article>
        </div>
    </div>
    <!-- Notification -->
    <div class="settings__list__section settings__notification__section">
        <h2 class="list__section__title">
        Notifications
        </h2>
        <div class="list__section__items">
            <article class="settings__item settings__notificatioin">
                <div class="settings__item__column">
                    <div class="settings__item__icon">
                        <span class="item__icon-cover notificatoin-cover">
                        <i class="fas fa-bell"></i>
                        </span>
                    </div>
                    <div class="settings__item__title">Notification</div>
                </div>
                <div class="settings__item__column">
                    <div class="settings__item__button settings__toggleButton">
                        <label
                        for="notification-checkBox"
                        class="settings__switch"
                        >
                            <input type="checkbox" id="notification-checkBox" />
                            <span class="settings__switch__slider"></span>
                        </label>
                    </div>
                </div>
            </article>
        </div>
    </div>
    <!-- Regional -->
    <div class="settings__list__section settings__regional__section">
        <h2 class="list__section__title">
        Regional
        </h2>
        <div class="list__section__items">
            <article class="settings__item settings__language">
                <div class="settings__item__column">
                    <div class="settings__item__icon">
                        <span class="item__icon-cover language-cover">
                            <i class="fas fa-language"></i>
                        </span>
                    </div>
                    <div class="settings__item__title">Language</div>
                </div>
                <div class="settings__item__column">
                    <div class="settings__item__button settings__gotoButton">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>
            </article>
            <article class="settings__item settings__logOut">
                <div class="settings__item__column">
                    <div class="settings__item__icon">
                        <span class="item__icon-cover logOut-cover"
                        ><i class="fas fa-door-open"></i>
                        </span>
                    </div>
                <div class="settings__item__title">Logout</div>
                </div>
                <div class="settings__item__column">
                    <div class="settings__item__button settings__gotoButton">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>
            </article>
        </div>
    </div>
    `;

    this.$target.appendChild(this.$settingsList);

    this.bindEvents = () => {
      // custom Event for dark mode
      const darkModeChangeEvent = new Event("DetectToggle");

      addEvent(this.$settingsList, "click", (e) => {
        e.stopPropagation();
        const target = e.target.closest("article");

        if (!target) {
          return;
        }
        if (target === $(".settings__user")) {
          this.$settingsList.classList.toggle(SHOWING_CLASS);
          $(".settings__userDetail").classList.toggle(SHOWING_CLASS);
        }

        if (target === $(".settings__darkMode")) {
          e.stopImmediatePropagation();
          const checkBox = $(".settings__checkBox");
          const _checked = checkBox.checked;
          checkBox.checked = !_checked;
          $(".settings__checkBox").dispatchEvent(darkModeChangeEvent);
        }
      });

      addEvent(
        document.getElementById("darkMode-checkBox"),
        "DetectToggle",
        (e) => {
          if (e.target.checked) {
            document.documentElement.dataset.theme = "dark";
          } else {
            document.documentElement.dataset.theme = "normal";
          }
        }
      );
    };

    setTimeout(() => {
      this.bindEvents();
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default SettingsList;
