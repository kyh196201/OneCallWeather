import { createElement } from "../utils/helpers.js";

class DataLoading {
  constructor({ $target, visible }) {
    if (!(this instanceof DataLoading)) {
      throw makeError(
        "New 키워드 없이 실행했습니다. In DataLoading",
        "New키워드에러"
      );
    }

    try {
      this.$target = $target;
      this.visible = visible;
      const $dataLoader = createElement("section");
      $dataLoader.classList.add("dataLoadingPage");
      this.$dataLoader = $dataLoader;

      this.$dataLoader.innerHTML = `<img src="./src/images/dataLoader.gif" alt="dataLoader.gif">`;

      this.$target.appendChild(this.$dataLoader);

      this.render();
    } catch (err) {
      throw err;
    }
  }
  render = () => {
    if (this.visible) {
      this.$dataLoader.style.display = "block";
    } else {
      this.$dataLoader.style.display = "none";
    }
  };

  setState = ({ visible }) => {
    this.visible = visible;
    this.render();
  };
}

export default DataLoading;
