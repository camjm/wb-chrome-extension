angular.module('workbench.popup').controller('CommandsController', ['$scope', 'commandService', function($scope, commandService){

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
    console.log(command);
  }

}]);
