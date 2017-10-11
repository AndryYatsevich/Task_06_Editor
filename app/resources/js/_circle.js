inheritPrototype(Circle, Shape);

function Circle(title, x, y, width, height) {
	Shape.call(this, title, x, y, width, height);
}

//Circle.prototype = Object.create(Shape.prototype)
//Circle.prototype.constructor = Circle;