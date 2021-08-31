const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darkshy.net/forecast/9d1465c6f3bb7abc71944bddd8548d026/" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      console.log(body.daily.data[0]);
      callback(
        undefined,
        body.daily.data[0].summary +
          " It is currently" +
          body.currently.temperature +
          "degress out. This high today is" +
          body.daily.data[0].temperatureHigh +
          "with a low of" +
          body.daily.data[0].temperatureLow +
          ". there is a " +
          +body.currently.precipProbabilility +
          "%"
      );
    }
  });
};

module.exports = forecast;
