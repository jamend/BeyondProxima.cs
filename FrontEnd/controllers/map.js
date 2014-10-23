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

            function getFleets() {
                $scope.fleets = api.Fleets.query();
            }

            $scope.tick = function() {
                api.Tick.save(function() {
                    getFleets();
                });
            };

            getFleets();
        }
    ]);