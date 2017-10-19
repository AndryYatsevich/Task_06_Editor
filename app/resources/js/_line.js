inheritPrototype(Line, Shape);

function Line(title, x, y, width, height) {
    Shape.call(this, title, x, y, width, height);
}

Line.prototype.render = function (ctx) {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.width || this.x, this.height || this.y);
    ctx.closePath();
    ctx.stroke();
};

Line.prototype.changePosition = function (x, y) {
    this.height = y;
    this.width = x;
};

Line.prototype.changeCollision = function (x, y) {
    var minX = Math.min(this.x, this.height) - 3;
    var maxX = Math.max(this.x, this.height) + 3;
    var minY = Math.min(this.y, this.width) - 3;
    var maxY = Math.max(this.y, this.width) + 3;
    var result;

    if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
        result = ((this.y - y) * (this.height - this.x)) - ((this.x - x) * (this.width - this.y));
        result = result / (Math.sqrt(Math.pow(this.height - this.x, 2) + Math.pow(this.width - this.y, 2)));

        return Math.abs(result) <= 3;
    } else {
        return false;
    }
};

Line.prototype.moveFigure = function (x, y) {

    this.x = x;
    this.y = y;
};
