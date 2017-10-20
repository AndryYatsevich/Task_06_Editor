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
    var minX = Math.min(this.x, this.width) - offset;
    var maxX = Math.max(this.x, this.width) + offset;
    var minY = Math.min(this.y, this.height) - offset;
    var maxY = Math.max(this.y, this.height) + offset;
    var result;
    if (x >= minX && x <= maxX && y >= minY && y <= maxY) {

        result = ((this.y - y) * (this.width - this.x)) - ((this.x - x) * (this.height - this.y));
        result = result / (Math.sqrt(Math.pow(this.width - this.x, 2) + Math.pow(this.height - this.y, 2)));
        return Math.abs(result) <= offset;
    } else {
        return false;
    }
};


Line.prototype.moveFigure = function (x, y, offsetX, offsetY) {
    var x2 = x - (this.x + offsetX);
    var y2 = y - (this.y + offsetY);

    this.x += x2;
    this.y += y2;
    this.width += x2;
    this.height += y2;
};
