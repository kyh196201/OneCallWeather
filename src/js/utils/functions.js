function removeFirstLoader() {
  if (document.readyState === "complete") {
    setTimeout(() => {
      document.querySelector(".firstLoadingPage").classList.toggle("hidden");
    }, 1000);
  }
}

export { removeFirstLoader };
