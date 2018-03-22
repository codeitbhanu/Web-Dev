// CONTROLLERS
dstvApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    
    $scope.menuItems = [
        'Just Added',
        'Watch Now',
        'Planner',
        'Settings',
        'Help',
    ];

    $scope.selected = 0;
    $scope.active = $scope.menuItems[$scope.selected];
    

    $scope.$watch('selected', function (newValue, oldValue) {
        console.log('val of selected: ' + $scope.selected);
        if (newValue > oldValue) {
            // $scope.selected = $scope.selected < $scope.menuItems.length?$scope.selected:$scope.menuItems.length-1;
            var removedItem = $scope.menuItems.splice(0, 1);
            $scope.menuItems.splice($scope.menuItems.length, 0, removedItem[0]);
            $scope.active = $scope.menuItems[0];
            // console.log('status: ' + $scope.menuItems);
        } else if (newValue < oldValue){
            var removedItem = $scope.menuItems.splice($scope.menuItems.length-1, 1);
            $scope.menuItems.splice(0, 0, removedItem[0]);
            $scope.active = $scope.menuItems[0];
            // console.log('status: ' + $scope.menuItems);
        }
        console.log('#Act: ' + $scope.active + ' #Sel: ' + $scope.selected);
    })
    // $scope.$watch('city', function() {
    //    cityService.city = $scope.city;
    // });
    
}]);


// dstvApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    
//     $scope.city = cityService.city;
//     $scope.days = $routeParams.days || '2';

//     var baseUrl = 'http://api.openweathermap.org/data/2.5/forecast';
//     var appId = "97179dcc105d9e6068f8861b6370cdd8";

//     $scope.weatherAPI = 
//     $resource(baseUrl, 
//         { callback: "JSON_CALLBACK" }, 
//         { get: { method: "JSONP" }});
    
//     $scope.weatherResult = $scope.weatherAPI.get(
//         { q: $scope.city, cnt: $scope.days, appid: appId});

//     // console.log($scope);
//     $scope.convertToCelsius = function (degK) {
//         return Math.round(degK - 273.15);
//     };

//     $scope.convertToDate = function (dt) {
//         return new Date(dt * 1000);
//     };

// }]);