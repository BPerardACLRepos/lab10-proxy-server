
// given /location?search=<some city>
export function getLocation(cityData) {
    const locationObject = {
        formatted_query: cityData.display_name,
        latitude: cityData.lat,
        longitude: cityData.lon,
    }
    return locationObject;
}

// given /weather?latitude=<some-lat>&longitude=<some-longitude>
export function getForecast(weatherData) {
    const forecastsObject = weatherData.map(weather => {
        return {
            forecast: weather.weather.description,
            time: new Date(weather.ts * 1000).toDateString(),
        }
    });
    return forecastsObject;
}

// given /reviews?latitude=<some-lat>&longitude=<some-longitude>
export function getReviews(cityData) {
    const reviewsObject = cityData.map(review => {
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