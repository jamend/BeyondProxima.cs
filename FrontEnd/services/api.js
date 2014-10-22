angular
    .module('beyondProxima')
    .factory('api', [
        '$resource', 'apiUrl', function ($resource, apiUrl) {
            return {
                StarSystems: $resource(apiUrl + '/starSystems/:id', { id: '@id' }),
                Fleets: $resource(apiUrl + '/fleets/:id', { id: '@id' }),
                FleetCourse: $resource(apiUrl + '/fleetCourse/:id', { id: '@id' })
            };
        }
    ]);