angular
    .module('beyondProxima')
    .directive('fleet', ['config', 'api', 'course', function (config, api, course) {
        return {
            restrict: 'A',
            replace: true,
            template: '<div ng-style="{left: tileSize * fleet.x + \'px\', top: tileSize * fleet.y + \'px\'}" ng-click="chooseFleetCourse()"></div>',
            link: function ($scope, element) {
                $scope.tileSize = config.tileSize;

                if ($scope.fleet.destinationStarSystemId != null) {
                    api.StarSystems.get({ id: $scope.fleet.destinationStarSystemId }, function (destination) {
                        course.showCourse($scope.fleet, destination, element);
                    });
                }

                $scope.chooseFleetCourse = function () {
                    course.startCourseChange($scope.fleet, element);
                };
            }
        }
    }]);