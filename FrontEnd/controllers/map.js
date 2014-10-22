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
        '$rootScope', '$scope', 'config', 'api', function ($rootScope, $scope, config, api) {
            $rootScope.title = 'Map';
            $scope.starSystems = api.StarSystems.query();
            $scope.fleets = api.Fleets.query();
        }
    ]);