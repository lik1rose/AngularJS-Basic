// MODULE
var ShitApp = angular.module("ShitApp", ["ngMessages", "ngResource"]);

// CONTROLLERS
ShitApp.controller("mainController", [
  "$scope",
  "$filter",
  function ($scope, $filter) {
    $scope.handle = "";
    $scope.lowercasehandle = function () {
      return $filter("lowercase")($scope.handle);
    };

    $scope.characters = 5;

    $scope.rules = [
      { rulename: "Must be 5 characters" },
      { rulename: "Must not be used elsewhere" },
      { rulename: "Must be shit!" },
    ];

    console.log($scope.rules);
  },
]);
