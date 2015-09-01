'use strict';

/**
 * @ngdoc function
 * @name timeOffApp.controller:TripCtrl
 * @description
 * # TripCtrl
 * Controller of the timeOffApp
 */
angular.module('timeOffApp')
  .controller('TripCtrl', function($scope, daData) {
    $scope.domesticTrip = true;
    $scope.tripType = 'Domestic';
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;

    $scope.currentDate = new Date();
    $scope.minDate = new Date(2013, 11, 17);
    $scope.maxDate = new Date(2017, 11, 17);
    init();

    function init() {
      daData.getData()
        .then(function(data) {
          $scope.trips = data;
          console.log(data);
        });
    }

    $scope.change = function(type) {
      $scope.domesticTrip = !$scope.domesticTrip;
      $scope.tripType = type;
    };

  });