// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    
    $scope.cities = cityService.cities;
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });
    
}]);


weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';

    var baseUrl = 'http://api.openweathermap.org/data/2.5/forecast';
    var appId = "97179dcc105d9e6068f8861b6370cdd8";

    $scope.weatherAPI = 
    $resource(baseUrl, 
        { callback: "JSON_CALLBACK" }, 
        { get: { method: "JSONP" }});
    
    $scope.weatherResult = $scope.weatherAPI.get(
        { q: $scope.city, cnt: $scope.days, appid: appId});

    // console.log($scope);
    $scope.convertToCelsius = function (degK) {
        return Math.round(degK - 273.15);
    };

    $scope.convertToDate = function (dt) {
        return new Date(dt * 1000);
    };

}]);