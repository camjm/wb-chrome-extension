angular.module('workbench.popup').factory('commandService', ['browserTab', function(browserTab) {

  return {
    execute: function(command) {
      browserTab.executeScript({
        code: command
      }, function(){
        console.log('command callback!');
      });
    }
  };

}]);
