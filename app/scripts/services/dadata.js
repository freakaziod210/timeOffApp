'use strict';

/**
 * @ngdoc service
 * @name timeOffApp.daData
 * @description
 * # daData
 * Factory in the timeOffApp.
 */
angular.module('timeOffApp')
  .factory('daData', function($q) {
    // Private Variables
    var self = {};
    var deferred = $q.defer();
    var columns = ['Id', 'DestinationId', 'DestinationName', 'DestinationAirportCode', 'Date', 'Price', 'Type', 'Category', 'ImageURL', 'ThingsToDoURL', 'FlightURL', 'TripStartDate', 'TripEndDate', 'TripDuration', 'AverageTicketPrice', 'MaxTicketPrice', 'PercentBelowAverage', 'Rating (1-5)', 'Score'];

    // Resolve promise when data is ready
    $badge.onRender(function() {
      deferred.resolve(true);
    });

    self.getData = function() {
      var query = self.setupDQL('vacations');

      return self.badgePromise()
        .then(function() {
          return self.executeDQL('vacations', query);
        }).then(function(data) {
          return self.zipCollectionToObjects(data.columns, data.rows);
        });
    };

    /******************************************************/
    // Private functions used for fetching the right data.
    /******************************************************/
    self.setupDQL = function(gridName) {
      var query = new Query();

      query.select(columns);

      return query.query();
    };

    /******************************************************/
    self.executeDQL = function(gridName, query) {
      return $badge.data[gridName].dqlQuery(query);
    };

    /******************************************************/
    self.zipCollectionToObjects = function(columns, collection) {
      return collection.map(function(row) {
        return _.zipObject(columns, row);
      });
    };

    /******************************************************/
    self.badgePromise = function() {
      return deferred.promise;
    };

    return self;
  });