angular
    .module('beyondProxima')
    .factory('courseChange', [
        '$q', function ($q) {
            var deferred;

            var courseChange = {
                startCourseChange: function (fleet) {
                    deferred = $q.defer();

                    return deferred.promise;
                },
                setCourse: function (destination) {
                    deferred.resolve(destination);
                }
            };

            return courseChange;
        }
    ]);