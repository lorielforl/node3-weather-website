const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darkshy.net/forecast/9d1465c6f3bb7abc71944bddd8548d026" +
    latitude +
    "," +
    longitude;

  request({ url: url, json: true }, (error, body) => {
    if (error) {
      callback("Unable to connect to service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        response.body.daily.data[0].summary +
          " " +
          " It is currently" +
          body.currently.temperature +
          "% chance of rate."
      );
    }
  });
};

module.exports = forecast;
