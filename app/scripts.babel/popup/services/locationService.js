angular.module('workbench.popup').factory('locationService', ['browserTab', function(browserTab) {

  return {
    goto: function(location) {
      browserTab.executeScript({
        code: 'window.location.href="' + location + '";'
      }, function(){
        console.log('location callback!');
      });
    }
  };

}]);
