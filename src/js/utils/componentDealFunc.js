function closeError() {
  this.errorSection.setState({ error: null, visible: false });
}

function openError(err) {
  this.errorSection.setState({ error: err, visible: true });
}

function oepnSettings() {
  this.settings.setState({ visible: true });
}

function closeSettings() {
  this.settings.setState({ visible: false });
  window.onkeydown = null;
}

function openSearch() {
  console.log(this.state.historyData);
  this.searchSection.setState({
    historyData: this.state.historyData,
    visible: true,
  });
}

function closeSearch() {
  this.searchSection.setState({
    historyData: this.state.historyData,
    visible: false,
  });
  window.onkeydown = null;
}

function clickHistory(city) {
  const nodelists = document.querySelectorAll(".card");
  const list = Array.from(nodelists);
  const findItem = list.find((li) => li.dataset.city === city.trim());
  if (findItem) {
    alert("이미 해당 페이지가 있습니다!");
  } else {
    console.log("load data...");
  }
}

function deleteHistory(id) {
  const _id = Number(id);
  const { historyData } = this.state;
  const newHistory = [
    ...historyData.slice(0, _id),
    ...historyData.slice(_id + 1),
  ];
  const newState = {
    data: this.state.data,
    historyData: newHistory,
    coord: this.state.coord,
  };
  this.setState(newState);
}

function closeMenu(selector) {
  console.log("close");
}

const searchEvent = {
  open: openSearch,
  close: closeSearch,
  click: clickHistory,
  delete: deleteHistory,
};

const settingsEvent = {
  open: oepnSettings,
  close: closeSettings,
};

const errorEvent = {
  open: openError,
  close: closeError,
};

export { searchEvent, settingsEvent, errorEvent };
