function onCloseError() {
  this.errorSection.setState({ error: null, visible: false });
  window.onclick = null;
}

function onOepnSettings() {
  this.settings.setState({ visible: true });
}

function onCloseSettings() {
  this.settings.setState({ visible: false });
  window.onkeydown = null;
}

function onOpenSearchSection() {
  this.searchSection.setState({
    historyData: this.state.historyData,
    visible: true,
  });
}

function onCloseSearchSection() {
  this.searchSection.setState({
    historyData: this.state.historyData,
    visible: false,
  });
  window.onkeydown = null;
}

function onCloseMenuItem(selector) {
  console.log("close");
}

const dealSearch = {
  open: onOpenSearchSection,
  close: onCloseSearchSection,
};

const dealSettings = {
  open: onOepnSettings,
  close: onCloseSettings,
};

export { dealSearch, dealSettings, onCloseError };
