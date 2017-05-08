// app.js
var app = angular.module("myApp", ["ngRoute", "uiGmapgoogle-maps"])

app.config(["$routeProvider", function($routeProvider) {
  
    $routeProvider
  
        .when("/one", {
            templateUrl: "one/one.html",
            controller: "oneController"
        })
    	.when("/two", {
            templateUrl: "two/two.html",
            controller: "twoController",
        })
		.when("/three", {
            templateUrl: "three/three.html",
            controller: "threeController",
        })
	
	 	.otherwise({
            redirectTo: "/one"
        });
	
	 
}]);

app.config(['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
	
        GoogleMapApiProviders.configure({
            china: true
        });
    }]
);
