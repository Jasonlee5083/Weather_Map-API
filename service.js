var app = angular.module("myApp");

app.service("mapservice",function($http) {
	
	var config = {
		headers:{
	'X-Mashape-Key': 'dfnU4hYGHxmshVKRvFYPvQND3Cfdp1sXuUpjsnhzljyW6zmpc0'	
		}
//		,data: { "name" :"jason"}
		
	};
	
	this.getMapdata1 = function(mapdata) {
		var url = 'https://michele-zonca-google-geocoding.p.mashape.com/geocode/json?address=' + mapdata;
		return $http.get(url,config).then(function(response){
			var mapResult = response.data;
			console.log(mapResult);
			return mapResult;
			
		})
	}
	
	
})

