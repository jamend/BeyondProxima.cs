angular
    .module('beyondProxima')
    .config([
        '$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/map', {
                    templateUrl: 'controllers/map.html',
                    controller: 'mapCtrl'
                });
        }
    ])
    .controller('mapCtrl', [
        '$rootScope', '$scope', 'api', function ($rootScope, $scope, api) {
            $rootScope.title = 'Map';
            $scope.tileSize = 64;
            $scope.starSystems = api.StarSystems.query();
        }
    ]);