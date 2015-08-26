'use strict';

/**
 * @ngdoc service
 * @name timeOffApp.daEvents
 * @description
 * # daEvents
 * Factory in the timeOffApp.
 */
angular.module('timeOffApp')
  .factory('daEvents', function ($rootScope, $q) {
    // Private Variables

    /**
     * @ngdoc object
     * @name daEvents._eventRegistry
     * @type {Object}
     * @description
     * # Event Registry
     * This object will become the source of truth for all events used in app.
     *
     * ## API
     * - key: The composed name of the event.
     *   - Compose your event name by using the format: source:eventName eg. 'teamFilter:changed'
     * - value: A brief description of your event.
     */
    var _eventRegistry = {
      'app:loaded': 'This event is fired when the appFrame as finished loading.',
      'filter:change': 'This event is fired anytime a filter value has been changed.'
    };

    // Create promise to reolve when appFrame has finished animating
    var _diferred = $q.defer();
    var offFn = $rootScope.$on('app:loaded', function () {
      _diferred.resolve('The app has loaded!');
      // This will un-register the event listener once its happend.
      offFn();
    });

    // Public API here
    var self = {
      /**
       * Registers an event listener if it is defined in `_eventRegistry` object.
       * @param  {string} name     Name of event. Must match key in `_eventRegistry` object.
       * @param  {func}   listener The function to be called when event is triggered. First param is $event obj.
       * @return {unbind}          Returns the unbind function for use of destroying event.
       */
      on: function (name, listener) {
        if (_eventRegistry.hasOwnProperty(name)) {
          return $rootScope.$on(name, listener);
        } else {
          console.error('No event registered with name: ' + name);
          return undefined;
        }
      },
      /**
       * Triggers an event that has been defined in `eventRegistry` object.
       * @param  {string} name Name of event to trigger. Must be defined first.
       * @param  {[.]}    args Args to pass to callback.
       * @return {[type]}      [description]
       */
      trigger: function (name, args) {
        if (_eventRegistry.hasOwnProperty(name)) {
          return $rootScope.$emit(name, args);
        } else {
          console.error('No event registered with name: ' + name);
          return undefined;
        }
      },
      // promise that is resolved when 'app:loaded' event is fired.
      appLoadPromise: _diferred.promise
    };

    return self;
  });
