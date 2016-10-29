/*This is to work with the open-weather API*/
var axios = require('axios');
var _baseURL = 'http://api.openweathermap.org/data/2.5/';
var _APIKEY = '1b7649e224a9a1550602aeaf111040bb';
var currentWeatherKey = '4c66f4cc32360bddf1de118eaee0c7b8';
var myReactAppKey = 'c5ece91a3e2bb3dd55ebe11c184db5d7'

function prepUrl(type, queryStringData){
	return _baseURL + type + '?' + preRouteParams(queryStringData);
}

function preRouteParams (queryStringData) {
	return Object.keys(queryStringData)

	.map(function (key) {
		return key + '='  + encodeURIComponent(queryStringData[key]);
	}).join('&')
}

function getQueryStringData (city) {
	return {
		q: city,
		type: 'accurate',
		APPID: _APIKEY,
		cnt: 5
	}
}

function getCurrentWeather (city) {
		//get data from openweatherAPI
		var queryStringData = queryStringData(city);
		var url = prepURL('weather', queryStringData)

		return axios.get(url)
		.then(function() {
			console.log(getCurrentWeatherData.data)
		})
}

function getForecast(city){
	var queryStringData = getQueryStringData(city);
	console.log(queryStringData)
  	var url = prepUrl('weather', queryStringData)
	return axios.get(url)
	.then(function (forecastData) {
		console.log(forecastData.data)
	})
}


module.exports = {
	getCurrentWeather: getCurrentWeather,
	getForecast: getForecast
};