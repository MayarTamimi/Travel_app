require('dotenv').config();

const apiKey = process.env.API_KEY;
const baseUrl = `https://pixabay.com/api/?key=${pixabayApiKey}&q=${cityName}&image_type=photo`; // Pixabay API URL

let pixaBayAPI = async(city) => {
    const res = await fetch(baseUrl);
    let data = {};
    try {
        data = await res.json();
    }catch(error) {
        console.log('error' , error);
    }
    return data;
}

export { pixaBayAPI };