inheritPrototype(Square, Shape);

function Square(title, x, y, width, height) {
	Shape.call(this, title, x, y, width, height);
}

Square.prototype.render = function (ctx){

	ctx.strokeRect(this.x, this.y, this.width, this.height);

}
//Square.prototype = Object.create(Shape.prototype)
//Square.prototype.constructor = Square;