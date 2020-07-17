// import Swiper from "https://unpkg.com/swiper/js/swiper.esm.browser.bundle.min.js";
import { $, createElement } from "../utils/helpers.js"
import { removeFirstLoader, storage } from "../utils/functions.js"
import ErrorSection from "./ErrorSection.js"
import Menu from "./Menu.js"
import CardContainer from "./CardContainer.js"
import Settings from "./Settings.js"
import SearchSection from "./SearchSection.js"
import { SHOWING_CLASS } from "../utils/constants.js"
import { api, getCoords } from "../utils/api.js"
import DataLoading from "./DataLoading.js"
import {
  searchEvent,
  settingsEvent,
  errorEvent,
} from "../utils/componentDealFunc.js"

class App {
  constructor({ $target }) {
    console.log("App Starts")
    // Remove First Loading Page After Loading Compeleted
    document.onreadystatechange = () => {
      removeFirstLoader()
    }

    this.$target = $target
    this.state = {
      data: [],
      historyData: [],
      coord: [],
    }

    this.storage = storage
    this._dbName = "data"

    // ErrorSection
    this.errorSection = new ErrorSection({
      $target: this.$target,
      data: {
        error: null,
        visible: false,
      },
      onClick: errorEvent.close.bind(this),
    })

    try {
      //Menu
      this.menu = new Menu({
        $target: this.$target,
        onClose: this.onCloseMenuItem,
        onOpen: {
          openSearch: searchEvent.open.bind(this),
          openSetting: settingsEvent.open.bind(this),
        },
      })

      // Card Container
      this.cardContainer = new CardContainer({
        $target: this.$target,
        data: [],
      })

      // Settings
      this.settings = new Settings({
        $target: this.$target,
        visible: false,
        onClose: settingsEvent.close.bind(this),
      })

      // Search Section
      this.searchSection = new SearchSection({
        $target: this.$target,
        data: [],
        visible: false,
        onSearch: this.onSearch,
        onClose: searchEvent.close.bind(this),
        onClick: searchEvent.click.bind(this),
        onDelete: searchEvent.delete.bind(this),
      })

      // Data Loading
      this.dataLoading = new DataLoading({
        $target: this.$target,
        visible: false,
      })

      this.init()
      // this.bindEvents();
    } catch (err) {
      console.error(err)
      errorEvent.open.bind(this)(err)
    }
  }

  init = async () => {
    try {
      // 로컬 스토리지로부터 데이터를 불러와야한다.
      let newState = ""
      const storedData = this.storage.getItem(this._dbName)
      if (storedData) {
        console.log("저장된 데이터 있을 경우")
        newState = storedData
        this.setState(newState)
        return
      }
      console.log("저장된 데이터 없을 경우")
      const coords = await getCoords()
      const data = await api.fetchWeatherByCoords(coords)
      const { current, daily, coord } = data
      newState = {
        data: [
          ...this.state.data,
          {
            current: current,
            daily: daily,
          },
        ],
        historyData: [...this.state.historyData],
        coord: [...this.state.coord, coord],
      }
      this.setState(newState)
    } catch (err) {
      console.error(err)
      errorEvent.close.bind(this)()
    }
  }

  setState = (newState) => {
    this.storage.setItem(this._dbName, newState)
    this.state = newState
    this.render()
  }

  render = () => {
    // render Cards;
    this.cardContainer.setState(this.state.data)
    this.searchSection.setState({
      historyData: this.state.historyData,
      visible: false,
    })
  }

  onSearch = async (cityName) => {
    try {
      const _cityName = cityName.trim()
      const nodelist = document.querySelectorAll(".card")
      const list = Array.from(nodelist)
      const findItem = list.find((li) => li.dataset.city === _cityName)
      if (findItem) {
        alert("이미 페이지가 존재합니다. 다시검색해주세요")
      } else {
        this.dataLoading.setState({ visible: true })
        const result = await api.fetchWeatherByCity(_cityName)
        const { current, daily, coord } = result
        const newState = {
          data: [...this.state.data, { current, daily }],
          historyData: [
            {
              id: this.state.historyData.length,
              title: _cityName,
            },
            ...this.state.historyData,
          ],
          coord: [...this.state.coord, coord],
        }
        console.log(newState)
        this.setState(newState)
        this.dataLoading.setState({ visible: false })
      }
    } catch (err) {
      console.error(err)
      errorEvent.open.bind(this)(err)
      this.dataLoading.setState({ visible: false })
    }
  }

  bindEvents = () => {}
}

export default App
