inheritPrototype(Circle, Shape);

function Circle(title, x, y, width, height, color) {
	Shape.call(this, title, x, y, width, height, color);
}

Circle.prototype.render = function (ctx){
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.height, 0, 360);
	ctx.fillStyle = this.color;
	ctx.fill();
	
}
//Circle.prototype = Object.create(Shape.prototype)
//Circle.prototype.constructor = Circle;