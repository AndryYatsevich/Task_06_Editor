function Shape(title, x, y, width, height) {
	this.title = title;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}

Shape.prototype.getTitle = function () {
		return this.title;
	}