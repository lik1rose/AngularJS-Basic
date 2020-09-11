//DIRECTIVE
weatherApp.directive("weatherReport", function () {
  return {
    restrict: "E",
    templateUrl: "directives/forecastApp.html",
    replace: true,
    scope: {
      weatherDay: "=",
      convertToStandard: "&",
      convertToDate: "&",
      dateFormat: "@",
    },
  };
});
