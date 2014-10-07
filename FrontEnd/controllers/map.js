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
        '$scope', function($scope) {
        }
    ]);