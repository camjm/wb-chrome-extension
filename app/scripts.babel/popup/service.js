angular.module('workbench.popup').factory('browserTab', [function() {
  return chrome.tabs;
}]);

angular.module('workbench.popup').factory('tabService', ['browserTab', function(browserTab) {
  return {
    execute: function(command) {
      browserTab.executeScript({
        code: command
      }, function() {
        console.log('command callback!');
      });
    }
  };
}]);
