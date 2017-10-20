inheritPrototype(Circle, Shape);

function Circle(title, x, y, width, height) {
    Shape.call(this, title, x, y, width, height);
}

Circle.prototype.render = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.height, 0, 360);
    ctx.strokeStyle = 'RGB(0, 0, 0)';
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.height, 0, 360);
    ctx.fillStyle = this.color;

    ctx.fill();
};

Circle.prototype.changePosition = function (x, y) {
    this.height = Math.abs((this.x + this.y) - (x + y));
};

Circle.prototype.changeCollision = function (x, y) {
    return Math.pow((x - this.x), 2) + Math.pow((y - this.y), 2) <= Math.pow(this.height, 2);
};

Circle.prototype.moveFigure = function (x, y, offsetX, offsetY) {
    this.x = x - offsetX;
    this.y = y - offsetY;
};

