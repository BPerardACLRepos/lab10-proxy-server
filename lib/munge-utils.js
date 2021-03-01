
// given /location?search=<some city>
function getLocation(citiesData) {

    const cityData = citiesData[0];

    const locationObject = {
        formatted_query: cityData.display_name,
        latitude: cityData.lat,
        longitude: cityData.lon,
    }
    return locationObject;
}

// given /weather?latitude=<some-lat>&longitude=<some-longitude>
function getForecast(weatherData) {

    const responseForecasts = weatherData.data.slice(0, 5);

    const forecastsArray = responseForecasts.map(weather => {
        return {
            forecast: weather.weather.description,
            time: new Date(weather.ts * 1000).toDateString(),
        }
    });
    return forecastsArray;
}

// given /reviews?latitude=<some-lat>&longitude=<some-longitude>
function getReviews(cityData) {

    const responseReviews = cityData.slice(0, 5);

    const reviewsObject = responseReviews.map(review => {
        return {
            name: review.name,
            image_url: review.image_url,
            price: review.price,
            rating: review.rating,
            url: review.url,
        }
    });
    return reviewsObject;
}

module.exports = {
    getLocation,
    getForecast,
    getReviews
};