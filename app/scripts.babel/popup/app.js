angular.module('workbench.popup', [
  'ngMaterial',
  'ui.router'
]).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('locations');

  $stateProvider
    .state('locations', {
      url: '/locations',
      views: {
        tab: {
          templateUrl: '/views/popup/locations.html',
          controller: 'LocationsController'
        }
      }
    })
    .state('commands', {
      url: '/commands',
      views: {
        tab: {
          templateUrl: '/views/popup/commands.html',
          controller: 'CommandsController'
        }
      }
    })
    .state('development', {
      url: '/development',
      views: {
        tab: {
          templateUrl: '/views/popup/development.html',
          controller: 'DevelopmentController'
        }
      }
    });

}]);
