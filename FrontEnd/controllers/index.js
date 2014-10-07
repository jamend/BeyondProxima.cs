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
        '$rootScope', '$scope', function ($rootScope, $scope) {
            $rootScope.title = 'Home';
            $scope.test = 'hi';
        }
    ]);