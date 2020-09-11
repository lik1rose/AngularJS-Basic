//CONTROLLERS
weatherApp.controller("homeController", [
  "$scope",
  "$location",
  "cityService",
  function ($scope, $location, cityService) {
    $scope.city = cityService.city;

    $scope.$watch("city", function () {
      cityService.city = $scope.city;
    });

    $scope.submit = function () {
      $location.path("/forecast");
    };
  },
]);

weatherApp.controller("forecastController", [
  "$scope",
  "$resource",
  "cityService",
  "$routeParams",
  function ($scope, $resource, cityService, $routeParams) {
    $scope.city = cityService.city;

    $scope.times = $routeParams.times || "3";

    const API_KEY = "27d222a2d9adf2d32cc02d257288b584";

    $scope.weatherAPI = $resource(
      "http://api.openweathermap.org/data/2.5/forecast?"
      // { callback: "JSON_CALLBACK" },
      // { get: { method: "JSONP" } }
    );

    $scope.weatherResult = $scope.weatherAPI.get({
      q: $scope.city,
      cnt: $scope.times,
      appid: API_KEY,
    });

    console.log($scope.weatherResult);

    $scope.convertTemp = function (degK) {
      return Math.abs(degK - 273.15).toFixed(1);
    };

    $scope.convertDate = function (dt) {
      return new Date(dt * 1000);
    };
  },
]);
