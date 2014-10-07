angular
    .module('beyondProxima', ['ngRoute', 'ngResource'])
    .config([
        '$locationProvider', function($locationProvider) {
            $locationProvider.html5Mode(true);
        }
    ])
    .constant('apiUrl', 'http://localhost:25781/api')
    .controller('appCtrl', [
        '$scope', function($scope) {
            $scope.title = 'Home';
        }
    ]);