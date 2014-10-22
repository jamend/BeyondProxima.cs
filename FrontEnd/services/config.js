angular
    .module('beyondProxima')
    .factory('config', function () {
        return {
            tileSize: 64,
            fleetSize: 32,
            systemSize: 64
        };
    });