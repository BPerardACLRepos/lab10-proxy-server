const { getLocation, getForecast, getReviews } = require('../lib/munge-utils.js');
const GeoData = require('../lib/geojson.js')
const YelpData = require('../lib/reviewsjson.js')
const WeatherData = require('../lib/weatherjson.js')

test('returns formatted json with city data', () => {

  const expectation = {
    formatted_query: 'Portland, Multnomah County, Oregon, USA',
    latitude: '45.5202471',
    longitude: '-122.6741949',
  }

  const actual = getLocation(GeoData);
  expect(actual).toEqual(expectation);
});

test('returns formatted json with Yelp data', () => {

  const expectation = [
    {
      "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/ZyQjV-wJQ2GHyX7l3jfbyg/o.jpg",
      "name": "Pike Place Chowder",
      "price": "$$",
      "rating": 4.5,
      "url": "https://www.yelp.com/biz/pike-place-chowder-seattle?adjust_creative=Xw8v02rBR_USqKccmd7_2Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Xw8v02rBR_USqKccmd7_2Q",
    },
    {
      "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/qGlIuj5yn6i82DK8kxw4Uw/o.jpg",
      "name": "Piroshky Piroshky",
      "price": "$",
      "rating": 4.5,
      "url": "https://www.yelp.com/biz/piroshky-piroshky-seattle?adjust_creative=Xw8v02rBR_USqKccmd7_2Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Xw8v02rBR_USqKccmd7_2Q",
    },
    {
      "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/jsZkRaDQ6aEa6jwRGWDi5Q/o.jpg",
      "name": "Ellenos Real Greek Yogurt",
      "price": "$",
      "rating": 5,
      "url": "https://www.yelp.com/biz/ellenos-real-greek-yogurt-seattle?adjust_creative=Xw8v02rBR_USqKccmd7_2Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Xw8v02rBR_USqKccmd7_2Q",
    },
    {
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/RoFtoqtXRm3Y-znSHeMXIw/o.jpg",
      "name": "The Pink Door",
      "price": "$$",
      "rating": 4.5,
      "url": "https://www.yelp.com/biz/the-pink-door-seattle-4?adjust_creative=Xw8v02rBR_USqKccmd7_2Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Xw8v02rBR_USqKccmd7_2Q",
    },
    {
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/vucCrknnlu1RRvRaKWwovQ/o.jpg",
      "name": "Japonessa Sushi Cocina",
      "price": "$$",
      "rating": 4,
      "url": "https://www.yelp.com/biz/japonessa-sushi-cocina-seattle?adjust_creative=Xw8v02rBR_USqKccmd7_2Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Xw8v02rBR_USqKccmd7_2Q",
    },
  ]

  const actual = getReviews(YelpData);
  expect(actual).toEqual(expectation);
});

test('returns formatted json with city data', () => {

  const expectation = [{ "forecast": "Scattered clouds", "time": "Tue May 05 2020" }, { "forecast": "Light snow", "time": "Wed May 06 2020" }, { "forecast": "Few clouds", "time": "Thu May 07 2020" }, { "forecast": "Few clouds", "time": "Fri May 08 2020" }, { "forecast": "Broken clouds", "time": "Sat May 09 2020" }]

  const actual = getForecast(WeatherData);

  console.log(actual);
  expect(actual).toEqual(expectation);
});