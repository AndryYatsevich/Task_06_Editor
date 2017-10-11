inheritPrototype(Line, Shape);

function Line(title, x, y, width, height) {
	Shape.call(this, title, x, y, width, height);

}

//Line.prototype = Object.create(Shape.prototype)
//Line.prototype.constructor = Line;

Line.prototype.render = function (ctx){

	ctx.beginPath();
	ctx.moveTo(this.x, this.y);
	ctx.lineTo(this.width, this.height);
	ctx.closePath();
    ctx.stroke();


}
