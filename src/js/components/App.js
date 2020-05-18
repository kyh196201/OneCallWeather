import Swiper from "https://unpkg.com/swiper/js/swiper.esm.browser.bundle.min.js";
import { $, createElement } from "../utils/helpers.js";
import { removeFirstLoader } from "../utils/functions.js";
import ErrorSection from "./ErrorSection.js";
import Menu from "./Menu.js";
import CardContainer from "./CardContainer.js";
import Settings from "./Settings.js";
import { SHOWING_CLASS } from "../utils/constants.js";

class App {
  constructor({ $target }) {
    console.log("App Starts");
    // Remove First Loading Page After Loading Compeleted
    // document.onreadystatechange = () => {
    //   removeFirstLoader();
    // };

    this.$target = $target;
    this.data = [];
    this.historyData = [];

    // ErrorSection
    this.errorSection = new ErrorSection({
      $target: this.$target,
      data: {
        error: null,
        visible: false,
      },
      onClick: this.onCloseError,
    });

    try {
      //Menu
      this.menu = new Menu({ $target: this.$target });

      // Card Container
      this.cardContainer = new CardContainer({
        $target: this.$target,
        data: null,
      });

      // Settings
      this.settings = new Settings({
        $target: this.$target,
        onClose: this.onCloseSettings,
      });
    } catch (err) {
      console.error(err);
      this.errorSection.setState({ error: err, visible: true });
    }
  }

  render = () => {
    // render Cards;
  };

  onCloseError = () => {
    this.errorSection.setState({ error: null, visible: false });
    window.onclick = null;
  };

  addNewCard = () => {};
}

export default App;
