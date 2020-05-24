const API_KEY = "fd7c41f2f4b0f197d5b5618bea235fb8";
const END_POINT = "https://api.openweathermap.org/data/2.5/";
const TYPE = {
  onecall: "onecall",
  weather: "weather",
};
const URL_END = `&appid=${API_KEY}&lang=kr&units=metric`;

const getCoords = () => {
  return new Promise(function (resolve, reject) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          resolve(pos.coords);
        },
        (err) => {
          throw new Error(err.message);
        }
      );
    } else {
      reject(new Error("geolocation error"));
    }
  });
};

const request = async (url) => {
  const response = await fetch(url);
  const resStatus = response.status;

  switch (resStatus) {
    case 200:
      return response.json();
    case 400:
      throw new Error(response.statusText);
    case 404:
      throw new Error("도시를 찾을수 없습니다");
    case 401:
      throw new Error("권한이 없습니다. API_KEY를 확인해주세요");
    case 500:
      throw new Error(response.statusText);
  }
};

const api = {
  fetchWeatherByCoords: async (coords) => {
    try {
      const lat = coords.latitude;
      const lon = coords.longitude;
      const urlOnecall = `${END_POINT}${TYPE.onecall}?lat=${lat}&lon=${lon}&exclude=hourly,current${URL_END}`;
      const urlWeather = `${END_POINT}${TYPE.weather}?lat=${lat}&lon=${lon}${URL_END}`;
      const res = await Promise.all([request(urlWeather), request(urlOnecall)]);
      const result = {
        current: res[0],
        daily: res[1].daily,
        coord: { lat, lon },
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  },
  fetchWeatherByCity: async (city) => {
    try {
      const urlWeather = `${END_POINT}${TYPE.weather}?q=${city}${URL_END}`;
      const resultByCity = await request(urlWeather);
      const { coord } = await resultByCity;

      const urlOnecall = `${END_POINT}${TYPE.onecall}?lat=${coord.lat}&lon=${coord.lon}&exclude=hourly,current${URL_END}`;
      const resultByOneCall = await request(urlOnecall);
      const result = {
        current: resultByCity,
        daily: resultByOneCall.daily,
        coord: coord,
      };
      return result;
    } catch (err) {
      throw err;
    }
  },
};

export { api, getCoords };
