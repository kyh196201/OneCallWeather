const SHOWING_CLASS = "showing";
const DROPDOWN_CLASS = "dropDown-animate";

const DAYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const WEATHER_CASES = {
  clouds: {
    img: "./src/images/weather/clouds.svg",
    icon: `<i class="fas fa-cloud"></i>`,
    color: "",
    greeting: "Cloudy Day",
  },
  clear: {
    img: "./src/images/weather/clear.svg",
    icon: `<i class="fas fa-sun"></i>`,
    greeting: "Sunny Day!",
  },
  rain: {
    img: "./src/images/weather/rain.svg",
    icon: `<i class="fas fa-cloud-rain"></i>`,
    greeting: "You might need this",
  },
  drizzle: {
    img: "./src/images/weather/drizzle.svg",
    icon: `<i class="fas fa-umbrella"></i>`,
    greeting: "Drizzle Day!",
  },
  snow: {
    img: "./src/images/weather/snow.svg",
    icon: `<i class="far fa-snowflake"></i>`,
    greeting: "Snow Day!",
  },
  thunderstorm: {
    img: "./src/images/weather/thunderstorm.svg",
    icon: `<i class="fas fa-bolt"></i>`,
    greeting: "Thunderstorm Day!",
  },
};

export { SHOWING_CLASS, DROPDOWN_CLASS, WEATHER_CASES, DAYS };
