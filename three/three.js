angular.module("myApp")

.controller('threeController',['$scope', 'mapservice', function($scope, mapservice) {
    $scope.lat = 40.77852;
	$scope.lng = -111.931414;
	
	$scope.map = { center: { latitude: $scope.lat, longitude: $scope.lng }, zoom: 14 };

	
	function createMap() {
		$scope.map = { center: { latitude: $scope.lat, longitude: $scope.lng }, zoom: 14 };
	};
	
	$scope.getMapdata = function(input) {
		mapservice.getMapdata1(input).then(function(mapResult){
			$scope.lat = mapResult.results[0].geometry.location.lat;
			$scope.lng = mapResult.results[0].geometry.location.lng;
			createMap();
		});
		
	};
 
	
	
}]);


//angular.module("myApp")
//
//.controller("threeController", ["$scope", function($scope) {
//	$scope.map = {};
//	$scope.map.city = 40.77852;
//	$scope.map.state = -111.931414;
//	
//      $scope.map = { center: { latitude: $scope.map.city, longitude: $scope.map.state }, zoom: 14 };
//	
//		$scope.search = function(){
//				  $scope.map = { center: 
//					   { latitude: $scope.map.city, longitude: $scope.map.state }, zoom: 14 };
//
//		}
//
//		}
//								
//]);



//    <style>
//      /* Always set the map height explicitly to define the size of the div
//       * element that contains the map. */
//      #map {
//        height: 100%;
//      }
//      /* Optional: Makes the sample page fill the window. */
//      html, body {
//        height: 100%;
//        margin: 0;
//        padding: 0;
//      }
//    </style>
//
//    <div id="map"></div>
//    <script>
//      var map;
//      function initMap() {
//        map = new google.maps.Map(document.getElementById('map'), {
//          center: {lat: -34.397, lng: 150.644},
//          zoom: 8
//        });
//      }
//    </script>
//    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAFrB1ToTkq4a-BNsaGUf_zgtR_Rb3Aa-0
//&callback=initMap"
//    async defer></script>
