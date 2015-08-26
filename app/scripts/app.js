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
    'ngSanitize',
    'ngTouch',
    'da.appFrame',
    'angularMoment',
    'angulartics',
    'angulartics.adobe.analytics'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $analyticsProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/main');

    // Now set up the states
    $stateProvider
      // Hook for route injection
      .state('main', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  
    
    $analyticsProvider.developerMode(true); // if uncommented tracking is disabled.
    
  })
  .run(function (daData, $analytics) {
    //daData needs to be injected here while using the Mason platform.
    
    angulartics.waitForVendorApi('dtm_track', 30, function() {
      $analytics.setUserProperties('timeOffApp', 'timeOffApp', '1.0.1');
      $analytics.pageTrack('/main'); //track the initial load as the assests aren't initally ready.
    });
    
  });
