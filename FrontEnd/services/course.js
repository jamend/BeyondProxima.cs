angular
    .module('beyondProxima')
    .factory('course', [
        'config', 'api', 'line', function (config, api, line) {
            var _fleet;
            var courseLine;

            function mouseMove(e) {
                courseLine.change(e.clientX, e.clientY, '#00ff00');
            }

            var course = {
                courseChangeActive: false,
                startCourseChange: function (fleet, element) {
                    var x = fleet.x * config.tileSize + config.fleetSize / 2;
                    var y = fleet.y * config.tileSize + config.fleetSize / 2;

                    _fleet = fleet;
                    if (!courseLine) {
                        courseLine = new line(element[0].parentNode, x, y, x, y, '#00ff00');
                    }

                    course.courseChangeActive = true;
                    element.parent().bind('mousemove', mouseMove);
                },
                showCourse: function (fleet, destination, element) {
                    var x = fleet.x * config.tileSize + config.fleetSize / 2;
                    var y = fleet.y * config.tileSize + config.fleetSize / 2;
                    var destinationX = destination.x * config.tileSize + config.tileSize / 2;
                    var destinationY = destination.y * config.tileSize + config.tileSize / 2;
                    if (!courseLine) {
                        courseLine = new line(element[0].parentNode, x, y, x, y, '#0000ff');
                    }
                    
                    courseLine.change(destinationX, destinationY, '#0000ff');
                },
                setCourse: function (destination, element) {
                    api.FleetCourse.save({
                        id: _fleet.id,
                        destination: destination.id
                    });

                    course.showCourse(_fleet, destination, element);

                    course.courseChangeActive = false;
                    element.parent().unbind('mousemove', mouseMove);
                    _fleet = null;
                }
            };

            return course;
        }
    ]);