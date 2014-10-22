angular
    .module('beyondProxima')
    .factory('line', function() {
        return function(container, x1, y1, x2, y2, colour) {
            var canvas = document.createElement('canvas');
            canvas.style.position = 'absolute';
            canvas.style.zIndex = '1';
            canvas.width = document.documentElement.clientWidth;
            canvas.height = document.documentElement.clientHeight;
            var ctx = canvas.getContext('2d');
            ctx.strokeStyle = colour;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            container.appendChild(canvas);

            this.change = function(newX2, newY2, newColour) {
                ctx.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
                if (typeof newColour !== 'undefined') ctx.strokeStyle = newColour;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(newX2, newY2);
                ctx.stroke();
            };

            this.destroy = function() {
                container.removeChild(canvas);
            };
        };
    });