require('dotenv').config();

const apiKey = process.env.API_KEY;
const baseUrl =`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${openWeatherApiKey}&units=metric`; // OpenWeather API URL

// latand and longitude
const lat = geoData.lat;
const lng = geoData.lng;

let WeatherAPI = async(geoData) => {
    const res = await fetch(baseUrl);
    let data = {};
    try {
        data = await res.jason();
    } catch (error) {
        console.log('error' , error);
    }
    return data;
};

export { WeatherAPI };