angular.module('workbench.popup').controller('LocationsController', ['$scope', 'locationService', function($scope, locationService){

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
      console.log(location);
  };

}]);
