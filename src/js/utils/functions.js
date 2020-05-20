function removeFirstLoader() {
  if (document.readyState === "complete") {
    setTimeout(() => {
      document.querySelector(".firstLoadingPage").classList.add("hidden");
    }, 2000);
  }
}

export { removeFirstLoader };
