var app = angular.module("myApp");

app.controller('oneController',['$scope','mapservice','mapservice2', function($scope,mapservice,mapservice2) {
 
	$scope.getMapdata = function(input) {
		mapservice.getMapdata1(input).then(function(mapResult){
			$scope.lat = mapResult.results[0].geometry.location.lat;
			$scope.lng = mapResult.results[0].geometry.location.lng;
		mapservice2.getMapdata2($scope.lat,$scope.lng).then(function(mapResult2){
			$scope.weather = mapResult2;
			
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


