import { validate } from "./validate.js";

const $ = (selector) => {
  validate.selector(selector);
  return document.querySelector(selector);
};

const createElement = (tag) => {
  validate.tag(tag);
  return document.createElement(tag);
};

function addEvent(element, eventName, cb) {
  if (window.addEventListener) {
    element.addEventListener(eventName, cb);
  } else if (window.attachEvent) {
    element.attachEvent("on" + eventName, cb);
  } else {
    element["on" + eventName] = cb;
  }
}

export { $, createElement, addEvent };
