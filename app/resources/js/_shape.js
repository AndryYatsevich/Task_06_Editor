function Shape(title, x, y, width, height, color) {
    this.title = title;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
}

Shape.prototype.getTitle = function () {
    return this.title;
};
