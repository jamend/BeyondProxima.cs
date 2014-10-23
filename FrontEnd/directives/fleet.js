angular
    .module('beyondProxima')
    .directive('fleet', ['config', 'api', 'courseChange', 'line', function (config, api, courseChange, line) {
        return {
            restrict: 'A',
            replace: true,
            template: '<div ng-style="{left: tileSize * fleet.x + \'px\', top: tileSize * fleet.y + \'px\'}" ng-click="chooseFleetCourse()"></div>',
            link: function ($scope, element) {
                $scope.tileSize = config.tileSize;

                var x = $scope.fleet.x * config.tileSize + config.fleetSize / 2;
                var y = $scope.fleet.y * config.tileSize + config.fleetSize / 2;
                var courseLine;

                function showCourse(destination) {
                    var destinationX = destination.x * config.tileSize + config.tileSize / 2;
                    var destinationY = destination.y * config.tileSize + config.tileSize / 2;
                    if (courseLine) courseLine.destroy();
                    courseLine = new line(element[0].parentNode, x, y, destinationX, destinationY, '#0000ff');
                };

                if ($scope.fleet.destinationStarSystemId != null) {
                    api.StarSystems.get({ id: $scope.fleet.destinationStarSystemId }, function (destination) {
                        showCourse(destination);
                    });
                }

                function mouseMove(e) {
                    courseLine.change(e.clientX, e.clientY, '#00ff00');
                }

                $scope.chooseFleetCourse = function() {
                    if (!courseLine) {
                        courseLine = new line(element[0].parentNode, x, y, x, y, '#00ff00');
                    }

                    element.parent().bind('mousemove', mouseMove);

                    courseChange
                        .startCourseChange($scope.fleet)
                        .then(function(destination) {
                            api.FleetCourse.save({
                                id: $scope.fleet.id,
                                destination: destination.id
                            });

                            showCourse(destination);

                            element.parent().unbind('mousemove', mouseMove);
                        });
                };

                $scope.$destroy = function () {
                    if (courseLine) {
                        courseLine.destroy();
                        courseLine = null;
                    }
                };
            }
        }
    }]);