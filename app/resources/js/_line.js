inheritPrototype(Line, Shape);

function Line(title, x, y, width, height) {
	Shape.call(this, title, x, y, width, height);

}

Line.prototype.render = function (ctx){

	ctx.beginPath();
    ctx.strokeStyle = this.color;
	ctx.moveTo(this.x, this.y);
	ctx.lineTo(this.width || this.x, this.height || this.y);
	ctx.closePath();
    ctx.stroke();
}

Line.prototype.changePosition = function (x, y) {
    this.height = y;
    this.width = x;
}
