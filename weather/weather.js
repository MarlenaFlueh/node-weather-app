const request = require('request');

const getWeather = (lat, lng, callback) => {
  return request({
    url: `https://api.darksky.net/forecast/673f1e94bcd88ff299541cd365fa2881/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect server.');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather.');
    } else if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;
