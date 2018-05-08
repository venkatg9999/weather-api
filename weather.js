
const request = require  ('request');

var getWeather = (lat, lng) => {

    request({
        url:https://api.darksky.net/forecast/c8c88e060d9f990a278a20795113f711/${lat},${lng}',

    json: true
}, (error, response, body) => {
        // if (error) {
        //   console.log("Unable to connect to forecast.io server");
        // } else if (response.statusCode === 400) {
        //    console.log("Unable to fetch weather");
        // } else if {response.statusCode === 200){
        //   console.log(body.currently.temperature);
// }

        console.log(body);

    });


    module.exports = router;
