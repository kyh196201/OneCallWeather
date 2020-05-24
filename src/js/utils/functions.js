function removeFirstLoader() {
  if (document.readyState === "complete") {
    setTimeout(() => {
      document.querySelector(".firstLoadingPage").classList.add("hidden");
    }, 2000);
  }
}

const storage = {
  getItem: (key) => {
    if (typeof key === "string" && key.trim() !== "") {
      const data = window.localStorage.getItem(key);
      return JSON.parse(data);
    } else {
      return null;
    }
  },
  setItem: (key, item) => {
    if (typeof key === "string" && key.trim() !== "" && item) {
      window.localStorage.setItem(key, JSON.stringify(item));
      return true;
    } else {
      return false;
    }
  },
};

export { removeFirstLoader, storage };
