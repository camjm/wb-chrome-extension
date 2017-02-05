angular.module('workbench.popup').controller('PopupController', [
  '$scope',
  'tabService',
  function($scope, tabService) {

    $scope.locations = [{
      label: 'Application Log',
      location: '#/Admin/Log.aspx'
    }, {
      label: 'Application Cache',
      location: '#/Admin/Cache.aspx'
    }, {
      label: 'System Information',
      location: '#/Admin/SystemInfo.aspx'
    }];

    $scope.gotoLocation = function(location) {
      var code = 'window.location.href="' + location + '";'
      tabService.execute(code);
    };

    $scope.commands = [{
      label: 'Clear Cache',
      command: 'window.ClearCache();'
    }, {
      label: 'Restart',
      command: 'window.ClearCache();'
    }, {
      label: 'Install',
      command: 'window.ClearCache();'
    }];

    $scope.executeCommand = function(command) {
      tabService.execute(command);
    }

  }
]);
