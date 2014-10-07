angular
    .module('beyondProxima', ['ngRoute'])
    .config([
        '$locationProvider', function($locationProvider) {
            $locationProvider.html5Mode(true);
        }
    ])
    .controller('appCtrl', [
        '$scope', function($scope) {
            $scope.title = 'Home';
        }
    ]);