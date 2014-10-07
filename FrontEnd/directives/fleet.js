function Line(container, x1, y1, x2, y2, colour) {
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
        if (typeof colour !== 'undefined') ctx.strokeStyle = colour;
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
    .directive('fleet', [function() {
        return {
            restrict: 'A',
            replace: true,
            template: '<div ng-style="{left: tileSize * fleet.x + \'px\', top: tileSize * fleet.y + \'px\'}" ng-click="chooseFleetCourse(fleet)"></div>',
            link: function ($scope, element) {
                $scope.chooseFleetCourse = function (fleet) {
                    var x = fleet.x * $scope.tileSize;
                    var y = fleet.y * $scope.tileSize;
                    console.log(x);
                    var line = new Line(element[0].parentNode, x, y, x, y, '#00ff00');
                    element.parent().bind('mousemove', function(e) {
                        line.change(e.clientX, e.clientY);
                    });
                };
            }
        }
    }]);