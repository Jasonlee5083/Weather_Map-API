angular.module("myApp")

.controller('mapController',['$scope', 'mapService', function($scope, mapService) {
    $scope.lat = 40.77852;
	$scope.lng = -111.931414;
	
	$scope.map = { center: { latitude: $scope.lat, longitude: $scope.lng }, zoom: 14 };

	
	function createMap() {
		$scope.map = { center: { latitude: $scope.lat, longitude: $scope.lng }, zoom: 14 };
	};
	
	$scope.getMapdata = function(input) {
		mapService.getMapdata(input).then(function(mapResult){
			$scope.lat = mapResult.results[0].geometry.location.lat;
			$scope.lng = mapResult.results[0].geometry.location.lng;
			createMap();
		});
		
	};
 
	
	
}]);

