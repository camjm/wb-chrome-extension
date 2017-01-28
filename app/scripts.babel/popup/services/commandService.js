angular.module('workbench.popup').factory('commandService', ['browserTab', function(browserTab) {

  return {
    execute: function(command) {
      console.log(command + ' command executed');
    }
  };

}]);
