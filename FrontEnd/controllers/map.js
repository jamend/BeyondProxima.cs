﻿function Line(container, x1, y1, x2, y2, colour) {
    var canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.zIndex = "1";
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = colour;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    container.appendChild(canvas);

    this._line = canvas;

    this.hide = function () {
        this._line.style.visibility = "hidden";
    };

    this.show = function () {
        this._line.style.visibility = "visible";
    };

    this.change = function (x2, y2, colour) {
        ctx.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
        ctx.strokeStyle = colour;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    };

    this.destroy = function () {
        container.removeChild(this._line);
    };
}

angular
    .module('beyondProxima')
    .config([
        '$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/map', {
                    templateUrl: 'controllers/map.html',
                    controller: 'mapCtrl'
                });
        }
    ])
    .controller('mapCtrl', [
        '$rootScope', '$scope', 'api', function ($rootScope, $scope, api) {
            $rootScope.title = 'Map';
            $scope.tileSize = 64;
            $scope.starSystems = api.StarSystems.query();
            $scope.fleets = api.Fleets.query();

            $scope.chooseFleetCourse = function (fleet) {
                
        };
    }
    ]);