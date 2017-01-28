angular.module('workbench.popup').factory('locationService', ['browserTab', function(browserTab) {

  return {
    goto: function(location) {
      console.log('going to ' + location);
    }
  };

}]);
