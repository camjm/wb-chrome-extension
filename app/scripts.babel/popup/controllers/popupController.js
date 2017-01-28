angular.module('workbench.popup').controller('PopupController', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams){
  $scope.isActive = function(state) {
    return $state.is(state);
  };
}]);
