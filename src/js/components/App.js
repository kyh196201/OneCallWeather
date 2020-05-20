import Swiper from "https://unpkg.com/swiper/js/swiper.esm.browser.bundle.min.js";
import { $, createElement } from "../utils/helpers.js";
import { removeFirstLoader } from "../utils/functions.js";
import ErrorSection from "./ErrorSection.js";
import Menu from "./Menu.js";
import CardContainer from "./CardContainer.js";
import Settings from "./Settings.js";
import SearchSection from "./SearchSection.js";
import { SHOWING_CLASS } from "../utils/constants.js";
import { api, getCoords } from "../utils/api.js";
import DataLoading from "./DataLoading.js";
import {
  dealSearch,
  dealSettings,
  onCloseError,
} from "../utils/componentDealFunc.js";

class App {
  constructor({ $target }) {
    console.log("App Starts");
    // Remove First Loading Page After Loading Compeleted
    document.onreadystatechange = () => {
      removeFirstLoader();
    };

    this.$target = $target;
    this.state = {
      data: [],
      historyData: [],
      coord: [],
    };

    // ErrorSection
    this.errorSection = new ErrorSection({
      $target: this.$target,
      data: {
        error: null,
        visible: false,
      },
      onClick: onCloseError.bind(this),
    });

    try {
      //Menu
      this.menu = new Menu({
        $target: this.$target,
        onClose: this.onCloseMenuItem,
        onOpen: {
          openSearch: dealSearch.open.bind(this),
          openSetting: dealSettings.open.bind(this),
        },
      });

      // Card Container
      this.cardContainer = new CardContainer({
        $target: this.$target,
        data: this.state.data,
      });

      // Settings
      this.settings = new Settings({
        $target: this.$target,
        visible: false,
        onClose: dealSettings.close.bind(this),
      });

      // Search Section
      this.searchSection = new SearchSection({
        $target: this.$target,
        data: this.state.historyData,
        visible: false,
        onSearch: this.onSearch,
        onClose: dealSearch.close.bind(this),
      });

      // Data Loading
      this.dataLoading = new DataLoading({
        $target: this.$target,
        visible: false,
      });

      this.init();
      // this.bindEvents();
    } catch (err) {
      console.error(err);
      this.errorSection.setState({ error: err, visible: true });
    }
  }

  init = async () => {
    try {
      const coords = await getCoords();
      const data = await api.fetchWeatherByCoords(coords);
      const { current, daily, coord } = data;
      const newState = {
        data: [
          ...this.state.data,
          {
            current: current,
            daily: daily,
          },
        ],
        historyData: this.state.historyData,
        coord: [...this.state.coord, coord],
      };
      this.setState(newState);
    } catch (err) {
      console.error(err);
      this.errorSection.setState({ error: err, visible: true });
    }
  };

  setState = (newState) => {
    this.state = newState;
    this.render();
  };

  render = () => {
    // render Cards;
    this.cardContainer.setState(this.state.data);
    this.searchSection.setState({
      historyData: this.state.historyData,
      visible: false,
    });
  };

  onSearch = async (cityName) => {
    try {
      this.dataLoading.setState({ visible: true });
      const _cityName = cityName.trim();
      const result = await api.fetchWeatherByCity(_cityName);
      const { current, daily, coord } = result;
      const newState = {
        data: [...this.state.data, { current, daily }],
        historyData: [...this.state.historyData, _cityName],
        coord: [...this.state.coord, coord],
      };
      console.log(newState);
      this.setState(newState);
      this.dataLoading.setState({ visible: false });
    } catch (err) {
      console.error(err);
      this.errorSection.setState({ error: err, visible: true });
      this.dataLoading.setState({ visible: false });
    }
  };

  bindEvents = () => {
    document.body.addEventListener("mousedown", (e) => {
      if (e.target && e.target.classList.contains("weekly-weather")) {
        console.log(e.type);
        e.stopImmediatePropagation();
        e.stopPropagation();
      }
    });
    document.body.addEventListener("touchstart", (e) => {
      if (e.target && e.target.classList.contains("weekly-weather")) {
        console.log(e.type, e.target);
        e.stopImmediatePropagation();
      }
    });
    document.body.addEventListener("touchend", (e) => {
      if (e.target && e.target.classList.contains("weekly-weather")) {
        console.log(e.type);
        e.stopImmediatePropagation();
      }
    });
    document.body.addEventListener("touchmove", (e) => {
      if (e.target && e.target.classList.contains("weekly-weather")) {
        console.log(e.type);
        e.stopImmediatePropagation();
      }
    });
    document.body.addEventListener("click", (e) => {
      if (e.target && e.target.classList.contains("weekly-weather")) {
        console.log(e.type);
        e.stopImmediatePropagation();
      }
    });
    document.body.addEventListener("mouseup", (e) => {
      if (e.target && e.target.classList.contains("weekly-weather")) {
        console.log(e.type);
        e.stopImmediatePropagation();
      }
    });
    document.body.addEventListener("mousemove", (e) => {
      if (e.target && e.target.classList.contains("weekly-weather")) {
        console.log(e.type);
        e.stopImmediatePropagation();
      }
    });
  };
}

export default App;
