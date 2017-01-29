angular.module('workbench.popup').controller('PopupController', [
  '$scope',
  'locationService',
  'commandService',
  function($scope, locationService, commandSerivce){

    $scope.locations = [{
      label: 'Application Log',
      location: '#/Admin/Log.aspx'
    },{
      label: 'Application Cache',
      location: '#/Admin/Cache.aspx'
    },{
      label: 'System Information',
      location: '#/Admin/Log.aspx'
    }];

    $scope.gotoLocation = function(location) {
        locationService.goto(location);
    };

    $scope.commands = [{
      label: 'Clear Cache',
      command: 'window.ClearCache();'
    },{
      label: 'Restart',
      command: 'window.ClearCache();'
    },{
      label: 'Install',
      command: 'window.ClearCache();'
    }];

    $scope.executeCommand = function(command) {
      commandSerivce.execute(command);
    }

}]);
