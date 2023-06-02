const axios = require('axios');
const keys = require('../data/api-keys.json');

const getCoordinatesFromZip = async(zipcode) =>{
    apiKey = keys.opencage;
    const response = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
        params: {
            q: zipcode,
            key: apiKey, 
        }
    });

    if (response.data.results[0]) {
        const { lat, lng } = response.data.results[0].geometry;
        return { lat, lng };
    } else {
        throw new Error('No result found');
    }
}

module.exports = {
    getCoordinatesFromZip
}