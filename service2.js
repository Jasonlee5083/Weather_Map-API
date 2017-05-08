var app = angular.module("myApp");

app.service("mapservice2",function($http) {
	
	var config = {
		headers:{
	'X-Mashape-Key': 'dfnU4hYGHxmshVKRvFYPvQND3Cfdp1sXuUpjsnhzljyW6zmpc0'	
		}
//		,data: { "name" :"jason"}
		
	};
	
	this.getMapdata2 = function(lat,lng) {
		var url ='https://simple-weather.p.mashape.com/weather?lat=' + lat + '&lng=' + lng;
		
		return $http.get(url,config).then(function(response){
			var mapResult2 = response.data;
			console.log(mapResult2);
			return mapResult2;
			
		})
	}
	
	
})


