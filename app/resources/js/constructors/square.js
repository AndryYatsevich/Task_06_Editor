MYAPP.constructors.Square = (function () {
    MYAPP.util.inheritPrototype(Square, MYAPP.constructors.Shape);

    function Square(title, x, y, width, height, figure) {
        Shape.call(this, title, x, y, width, height, figure);
        this.figure = 'Square';
    }

    Square.prototype.render = function (ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeStyle = 'RGB(0, 0, 0)';
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    };

    Square.prototype.changePosition = function (x, y) {
        this.width = x - this.x;
        this.height = y - this.y;
    };

    Square.prototype.changeCollision = function (x, y) {
        var x2 = (this.x + this.width);
        var y2 = (this.y + this.height);

        var xLeft = Math.min(this.x, x2);
        var yLeft = Math.min(this.y, y2);
        var xRight = Math.max(this.x, x2);
        var yRight = Math.max(this.y, y2);

        return (xLeft <= x) && (x <= xRight) && (yLeft <= y) && (y <= yRight);
    };

    Square.prototype.moveFigure = function (x, y, offsetX, offsetY) {
        this.x = x - offsetX;
        this.y = y - offsetY;
    };
})();
