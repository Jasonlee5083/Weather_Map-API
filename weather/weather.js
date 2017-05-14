var app = angular.module("myApp");

app.controller('weatherController',['$scope','mapService','weatherService', function($scope,mapService,weatherService) {
 
	$scope.getMapdata = function(input) {
		mapService.getMapdata(input).then(function(mapResult){
			$scope.lat = mapResult.results[0].geometry.location.lat;
			$scope.lng = mapResult.results[0].geometry.location.lng;
		weatherService.getWeatherDate($scope.lat,$scope.lng).then(function(weatherResult){
			$scope.weather = weatherResult;
			
		})
		});
	}
 
	
}]);

app.filter("unitLat",function(){
	return function(num) {
		if (num === undefined){
			return;
		}
		return  'Latitude: ' + num;
	}
});

app.filter("unitlng",function(){
	return function(num) {
		if (num === undefined){
			return;
		}
		return ' Longitude: ' + num;
	}
});

app.filter("unitTemp",function(){
	return function(str) {
		if (num === undefined){
			return;
		}
		return ' Temperature: ' + str;
	}
});


