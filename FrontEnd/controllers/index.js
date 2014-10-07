angular
    .module('beyondProxima')
    .config([
        '$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'controllers/index.html',
                    controller: 'indexCtrl'
                });
        }
    ])
    .controller('indexCtrl', [
        '$scope', function($scope) {
            $scope.test = 'hi';
        }
    ]);