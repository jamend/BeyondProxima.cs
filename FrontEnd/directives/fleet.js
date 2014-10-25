angular
    .module('beyondProxima')
    .directive('fleet', ['config', 'api', 'courseChange', 'line', function (config, api, courseChange, line) {
        return {
            restrict: 'A',
            replace: true,
            template: '<div ng-style="{left: x + \'px\', top: y + \'px\'}" ng-click="chooseFleetCourse()"></div>',
            link: function ($scope, element) {
                var courseLine;

                function showCourse(destination) {
                    $scope.x = $scope.fleet.x * config.tileSize;
                    $scope.y = $scope.fleet.y * config.tileSize;

                    var destinationX = destination.x * config.tileSize + config.tileSize / 2;
                    var destinationY = destination.y * config.tileSize + config.tileSize / 2;
                    removeLine();
                    courseLine = new line(element[0].parentNode, $scope.x + config.fleetSize / 2, $scope.y + config.fleetSize / 2, destinationX, destinationY, '#0000ff');
                };

                function idleFleet() {
                    $scope.x = $scope.fleet.x * config.tileSize + config.tileSize / 2;
                    $scope.y = $scope.fleet.y * config.tileSize;
                    removeLine();
                };

                function removeLine() {
                    if (courseLine) {
                        courseLine.destroy();
                        courseLine = null;
                    }
                }

                if ($scope.fleet.destinationStarSystemId == null) {
                    idleFleet();
                } else {
                    api.StarSystems.get({ id: $scope.fleet.destinationStarSystemId }, function (destination) {
                        showCourse(destination);
                    });
                }

                function mouseMove(e) {
                    courseLine.change(e.clientX, e.clientY, '#00ff00');
                }

                $scope.chooseFleetCourse = function () {
                    $scope.x = $scope.fleet.x * config.tileSize;
                    $scope.y = $scope.fleet.y * config.tileSize;

                    if (!courseLine) {
                        courseLine = new line(element[0].parentNode, $scope.x + config.fleetSize / 2, $scope.y + config.fleetSize / 2, $scope.x, $scope.y, '#00ff00');
                    }

                    element.parent().bind('mousemove', mouseMove);

                    courseChange
                        .startCourseChange($scope.fleet)
                        .then(function(destination) {
                            api.FleetCourse.save({
                                id: $scope.fleet.id,
                                destination: destination.id
                            });

                            if ($scope.fleet.starSystemId == destination.id) {
                                // cancel course
                                $scope.fleet.destinationStarSystemId = null;
                                idleFleet();
                            } else {
                                $scope.fleet.destinationStarSystemId = destination.id;
                                showCourse(destination);
                            }

                            element.parent().unbind('mousemove', mouseMove);
                        });
                };

                

                $scope.$destroy = function () {
                    removeLine();
                };
            }
        }
    }]);