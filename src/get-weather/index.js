
const axios = require('axios');
const apiUrlBase = "https://api.openweathermap.org/data/2.5/weather";
const keys = require('../data/api-keys.json');

const getDataFromApi = async (lat, lon) => {
    apiKey = keys.weather;
    const url = `${apiUrlBase}?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const response = await axios.get(url);
    const weatherData = response.data.weather[0];
    return {
        description: response.data.weather[0].description,
        temp:response.data.main.temp
    };
}

module.exports = {
    getDataFromApi
}