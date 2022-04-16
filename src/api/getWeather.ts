import axios from 'axios';

const getWeather = () => {
  let lat = '';
  let lon = '';
  let key = '';
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`,
  );
};

export default getWeather;
