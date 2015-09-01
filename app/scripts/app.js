'use strict';

/**
 * @ngdoc overview
 * @name timeOffApp
 * @description
 * # timeOffApp
 *
 * Main module of the application.
 */
angular
  .module('timeOffApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'ngSanitize',
    'ngTouch',
    'angularMoment',
    'domobits'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/trip');

    // Now set up the states
    $stateProvider
      // Hook for route injection
      .state('trip', {
        url: '/trip',
        templateUrl: 'views/trip.html',
        controller: 'TripCtrl'
      });
  })
  .run(function (daData) {
    //daData needs to be injected here while using the Mason platform.

  });
