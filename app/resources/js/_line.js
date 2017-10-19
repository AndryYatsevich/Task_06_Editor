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
    var offset = 10;
    var minX = Math.min(this.x, this.height) - offset;
    var maxX = Math.max(this.x, this.height) + offset;
    var minY = Math.min(this.y, this.width) - offset;
    var maxY = Math.max(this.y, this.width) + offset;
    var result;
    console.log(minX, maxX, minY, maxY);
    if (x >= minX && x <= maxX && y >= minY && y <= maxY) {

        result = ((this.y - y) * (this.height - this.x)) - ((this.x - x) * (this.width - this.y));
        result = result / (Math.sqrt(Math.pow(this.height - this.x, 2) + Math.pow(this.width - this.y, 2)));

        return Math.abs(result) <= offset;
    } else {
        return false;
    }
};

Line.prototype.moveFigure = function (x, y, offsetX, offsetY) {
    var x2 = x - this.x;
    var y2 = y - this.y;

    this.x = x;
    this.y = y;
    this.width = x - this.width;
    this.height = y - this.height;
    console.log(offsetX, offsetY);
};
