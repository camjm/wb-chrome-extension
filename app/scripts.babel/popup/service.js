angular.module('workbench.popup').factory('chrome', [function() {

  return chrome.tabs;

}]);

angular.module('workbench.popup').factory('browserService', ['chrome', function(chrome) {

  return {
    getActiveTab: function(callback) {
      var activeTabQuery = {
        currentWindow: true,
        active: true
      };
      chrome.query(activeTabQuery, function(tabs) {
        tabs.forEach(callback);
      });
    },
    execute: function(tab, code, callback) {
      chrome.executeScript(tab.id, {code: code}, callback);
    },
    sendMessage: function(tab, message, callback) {
      chrome.sendMessage(tab.id, message, {}, callback);
    }
  };

}]);

angular.module('workbench.popup').factory('popupService', ['browserService', function(browserService) {

  return {
    goto: function(location, callback) {
      browserService.getActiveTab(function(tab) {
        var code = 'window.location.href="' + location + '";'
        browserService.execute(tab, code, callback);
      });
    },
    execute: function(command, callback) {
      browserService.getActiveTab(function(tab){
        browserService.sendMessage(tab, command, callback);
      });
    }
  };

}]);
