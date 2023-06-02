const {getCoordinatesFromZip} = require("./get-coord");
const {getDataFromApi} = require('./get-weather')
const readline = require('readline');

const displayResult = async (zipcode) =>{
    console.log(`You entered: ${zipcode}`);
    const coords = await getCoordinatesFromZip(zipcode);
    console.log(`Your coordinates are`, coords);
    const weather = await getDataFromApi(coords.lat, coords.lng);
    console.log(`Today's weather: ${weather.description} with a temp of ${weather.temp}`)
    
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your zip code: ', (zipcode) => {
    displayResult(zipcode);
    rl.close();
});

