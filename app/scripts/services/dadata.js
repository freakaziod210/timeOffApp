'use strict';

/**
 * @ngdoc service
 * @name timeOffApp.daData
 * @description
 * # daData
 * Factory in the timeOffApp.
 */
angular.module('timeOffApp')
  .factory('daData', function ($q) {
    // Private Variables
    var things = [];
    var diferred = $q.defer();

    // Resolve promise when data is ready
    $badge.onRender(function () {
      diferred.resolve(true);
    });

    // Psuedo Code:
    // Make sure data is ready for you pass it to callback.
    function asyncGetData (cb) {
      var callback = cb || angular.noop;
      if(things.length < 1) {
        diferred.promise.then(function (){
          things = $badge.data.grid.val();
          callback(things);
        });
      } else {
        callback(things);
      }
    }

    // Public API here
    // This is just a sample of getting 'thing' data
    var self = {
      getThings: asyncGetData
    };

    return self;
  });
