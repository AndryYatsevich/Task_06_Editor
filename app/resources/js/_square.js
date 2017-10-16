inheritPrototype(Square, Shape);

function Square(title, x, y, width, height) {
	Shape.call(this, title, x, y, width, height);
}

Square.prototype.render = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}

Square.prototype.changePosition = function (x, y) {

    this.width = x - this.x;
    this.height = y - this.y;
}
