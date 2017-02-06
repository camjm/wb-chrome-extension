angular.module('workbench.popup').controller('PopupController', [
  '$scope',
  'popupService',
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
      tabService.goto(location);
    };

    $scope.commands = [{
      label: 'Clear Cache',
      message: 'cache',
      processing: false
    }, {
      label: 'Restart',
      message: 'restart',
      processing: false
    }, {
      label: 'Install',
      message: 'install',
      processing: false
    }];

    $scope.executeCommand = function(command) {
      command.processing = true;
      tabService.execute(command.message, function() {
        $scope.$apply(function(response){
          command.processing = false;
        })
      });
    }

  }
]);
