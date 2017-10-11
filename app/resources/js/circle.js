inheritPrototype(Circle, Shape);

function Circle(title, x, y, width, height) {
	Shape.call(this, title, x, y, width, height);
}

Circle.prototype.render = function (ctx){
	console.log(ctx);
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.height, 0, 360);
	ctx.fill();
	
}
//Circle.prototype = Object.create(Shape.prototype)
//Circle.prototype.constructor = Circle;