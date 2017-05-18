
var app = angular.module("myApp", ["ngRoute", "uiGmapgoogle-maps"])

app.config(["$routeProvider", function($routeProvider) {
  
    $routeProvider
  
        .when("/weather", {
            templateUrl: "weather/weather.html",
            controller: "weatherController"
        })
		.when("/map", {
            templateUrl: "map/map.html",
            controller: "mapController",
        })
	
	 	.otherwise({
            redirectTo: "/weather"
        });
	
	 
}]);

app.config(['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
	
        GoogleMapApiProviders.configure({
		china: true,
		key: "AIzaSyAFrB1ToTkq4a-BNsaGUf_zgtR_Rb3Aa-0&"
        });
    }]
);
