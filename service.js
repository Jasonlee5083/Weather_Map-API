var app = angular.module("myApp");


app.service("mapService",function($http) {
	
	var config = {
		headers:{
	'X-Mashape-Key': 'dfnU4hYGHxmshVKRvFYPvQND3Cfdp1sXuUpjsnhzljyW6zmpc0'	
		}
//		,data: { "name" :"jason"}
		
	};
	
	this.getMapdata = function(mapdata) {
		var url = 'https://michele-zonca-google-geocoding.p.mashape.com/geocode/json?address=' + mapdata;
		return $http.get(url,config).then(function(response){
			var mapResult = response.data;
			console.log(mapResult);
			return mapResult;
			
		})
	}
})
	
	
app.service("weatherService",function($http) {
	
	var config = {
		headers:{
	'X-Mashape-Key': 'dfnU4hYGHxmshVKRvFYPvQND3Cfdp1sXuUpjsnhzljyW6zmpc0'	
		}		
	};
	
	this.getWeatherDate = function(lat,lng) {
		var url ='https://simple-weather.p.mashape.com/weather?lat=' + lat + '&lng=' + lng;
		
		return $http.get(url,config).then(function(response){
			var weatherResult = response.data;
			console.log(weatherResult);
			return weatherResult;
			
		})
	}
	
	
})

