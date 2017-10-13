inheritPrototype(Square, Shape);

function Square(title, x, y, width, height, color) {
	Shape.call(this, title, x, y, width, height, color);
}

Square.prototype.render = function (ctx){
	ctx.fillStyle = this.color;
	ctx.fillRect(this.x, this.y, this.width, this.height);
	


}
//Square.prototype = Object.create(Shape.prototype)
//Square.prototype.constructor = Square;