'use strict';

/**
 * @ngdoc function
 * @name timeOffApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the timeOffApp
 */
angular.module('timeOffApp')
  .controller('SidebarCtrl', function ($scope) {

    // Definition for Navbar
    $scope.routes = [
      { name: 'MAIN PAGE', route: 'main'},
      // Hook for route scope injection
    ];

    // Definition for Sidebar
    $scope.sidebar = {
      options: true,
      key: true,
      present: false,
      info: true,
      calculations: true
    };

  });
