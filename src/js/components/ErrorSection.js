import { $, createElement } from "../utils/helpers.js";

class ErrorSection {
  constructor({ $target, data, onClick }) {
    this.$target = $target;
    this.data = data;
    this.onClick = onClick;

    const $errorSection = createElement("section");
    $errorSection.className = "errorSection";
    this.$errorSection = $errorSection;
    this.$target.appendChild(this.$errorSection);

    this.bindEvents();
  }

  render = () => {
    const { error, visible } = this.data;
    if (visible) {
      this.$errorSection.innerHTML = `<div class="errorBox">
              <span class="errorBox__close"><button><i class="fas fa-times"></i></button></span>
              <h2>Sorry!</h2>
              <p class="errorBox__msg">${error.message}</p>
              <div class="errorBox__ok"><button>ok</button></div>
          </div>`;

      this.$errorSection.style.display = "block";
      window.onkeydown = (e) => {
        const keyCode = e.keyCode;
        if (keyCode && keyCode === 27) {
          this.onClick();
        } else {
          return;
        }
      };
    } else {
      this.$errorSection.style.display = "none";
      window.onkeydown = null;
    }
  };

  setState = (newData) => {
    this.data = newData;
    this.render();
  };

  bindEvents = () => {
    this.$errorSection.addEventListener("click", (e) => {
      e.stopPropagation();
      const target = e.target;
      if (
        target === this.$errorSection ||
        target === document.querySelector(".errorBox__close button") ||
        target === document.querySelector(".errorBox__close button i") ||
        target === document.querySelector(".errorBox__ok button")
      ) {
        this.onClick();
      } else {
        return;
      }
    });
  };
}

export default ErrorSection;
