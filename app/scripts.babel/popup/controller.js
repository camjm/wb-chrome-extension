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
      command: 'clear cache'
    },{
      label: 'Restart',
      command: 'restart'
    },{
      label: 'Install',
      command: 'install'
    }];

    $scope.executeCommand = function(command) {
      commandSerivce.execute(command);
    }

}]);
