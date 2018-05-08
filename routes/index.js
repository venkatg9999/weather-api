const request = require ('request');

const weather = require ('./weather');

var getAddress = (address) => {
  var encodedAddress = encodeURLComponent(address);


  request({

      url: http
://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}',
    json: true
}, (error, response, body) => {
    if (error) {
        console.log("Unable to connect to Google Servers");
    } else if (body.status === 'ZERO_RESULTS') {
        console.log("Address not found!");
    }else if (body.status === 'OK'){


    weather.getWeather(body.results[0].geometry.location.lat, body.results[0]                              )













//
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
