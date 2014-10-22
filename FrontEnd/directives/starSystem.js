angular
    .module('beyondProxima')
    .directive('starSystem', ['config', 'api', 'course', function (config, api, course) {
        return {
            restrict: 'A',
            replace: true,
            template: '<div ng-style="{left: tileSize * starSystem.x + \'px\', top: tileSize * starSystem.y + \'px\'}" ng-click="showSystem()" class="starSystem starType_1" title="{{starSystem.name}}"></div>',
            link: function ($scope, element) {
                $scope.tileSize = config.tileSize;

                element.bind('click', function() {
                    if (course.courseChangeActive) {
                        course.setCourse($scope.starSystem, element);
                    }
                });
            }
        }
    }]);