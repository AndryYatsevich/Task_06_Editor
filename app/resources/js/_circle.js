inheritPrototype(Circle, Shape);

function Circle(title, x, y, width, height) {
	Shape.call(this, title, x, y, width, height);
}

Circle.prototype.render = function (ctx){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.height, 0, 360);
    ctx.fillStyle = this.color;
    ctx.fill();

}
Circle.prototype.changePosition = function (x, y) {
    this.height = Math.abs((this.x + this.y) - (x + y));
}
