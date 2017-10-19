var example = document.getElementById('example');
var ctx = example.getContext('2d');
var colorValue = document.getElementById('color');
var divRandomColor = document.getElementById('randomcolor');
var canvasMenu = document.getElementById('canvasLeft');
var borderCanvasLeft = canvasMenu.getContext('2d');
var figures = [];
var color = '#000';
var id = 0;
var selected, isClicked, Figure, offsetX, offsetY;


example.width = 847;
example.height = 500;
ctx.strokeStyle = 'fff';

canvasMenu.addEventListener('click', activeFigure);

function init() {
    canvasMenu.width = 250;
    canvasMenu.height = 310;

    borderCanvasLeft.beginPath();
    borderCanvasLeft.arc(125, 160, 50, 0, 260);
    borderCanvasLeft.stroke();


    borderCanvasLeft.beginPath();
    borderCanvasLeft.moveTo(20, 250);
    borderCanvasLeft.lineTo(220, 250);
    borderCanvasLeft.closePath();
    borderCanvasLeft.stroke();

    borderCanvasLeft.strokeRect(20, 30, 200, 50);
    borderCanvasLeft.strokeStyle = '#8B0000';
}

function activeFigure(e) {
    if (e.offsetY <= 95) {
        borderCanvasLeft.clearRect(0, 0, example.width, example.height);
        borderCanvasLeft.strokeStyle = '#000000';
        borderCanvasLeft.strokeRect(20, 30, 200, 50);

        borderCanvasLeft.beginPath();
        borderCanvasLeft.arc(125, 160, 50, 0, 260);
        borderCanvasLeft.stroke();


        borderCanvasLeft.beginPath();
        borderCanvasLeft.moveTo(20, 250);
        borderCanvasLeft.lineTo(220, 250);
        borderCanvasLeft.closePath();
        borderCanvasLeft.stroke();

        borderCanvasLeft.strokeStyle = '#FF0000';

        borderCanvasLeft.strokeRect(15, 25, 210, 60);

        Figure = Square;
    } else if (e.offsetY <= 200) {
        borderCanvasLeft.clearRect(0, 0, example.width, example.height);
        borderCanvasLeft.strokeStyle = '#000000';
        borderCanvasLeft.strokeRect(20, 30, 200, 50);

        borderCanvasLeft.beginPath();
        borderCanvasLeft.arc(125, 160, 50, 0, 260);
        borderCanvasLeft.stroke();


        borderCanvasLeft.beginPath();
        borderCanvasLeft.moveTo(20, 250);
        borderCanvasLeft.lineTo(220, 250);
        borderCanvasLeft.closePath();
        borderCanvasLeft.stroke();

        borderCanvasLeft.strokeStyle = '#FF0000';
        borderCanvasLeft.strokeRect(70, 105, 110, 110);

        Figure = Circle;
    } else if (e.offsetY <= 300) {
        borderCanvasLeft.clearRect(0, 0, example.width, example.height);
        borderCanvasLeft.strokeStyle = '#000000';
        borderCanvasLeft.strokeRect(20, 30, 200, 50);

        borderCanvasLeft.beginPath();
        borderCanvasLeft.arc(125, 160, 50, 0, 260);
        borderCanvasLeft.stroke();


        borderCanvasLeft.beginPath();
        borderCanvasLeft.moveTo(20, 250);
        borderCanvasLeft.lineTo(220, 250);
        borderCanvasLeft.closePath();
        borderCanvasLeft.stroke();

        borderCanvasLeft.strokeStyle = '#FF0000';

        borderCanvasLeft.strokeRect(15, 240, 210, 20);

        Figure = Line;
    }
}

example.addEventListener('mousedown', beginDrawingAShape);
example.addEventListener('mousemove', drawingSecondDot);
example.addEventListener('mouseup', endDrawingAShape);

function beginDrawingAShape(e) {
    if (!Figure) {
        for (var i = 0; i < figures.length; i++) {
            if (figures[i].changeCollision(e.offsetX, e.offsetY) && (!selected || figures[i].title > selected.title)) {
                selected = figures[i];
            }
        }
        if (selected) {
            isClicked = true;
            offsetX = e.offsetX - selected.x;
            offsetY = e.offsetY - selected.y;
            console.log(selected);
        }
    } else {
        var obj = new Figure(id++, e.offsetX, e.offsetY, null, null, color);
        selected = obj;
        selected.color = color;
        figures.push(obj);
        obj.render(ctx);
        isClicked = true;
    }
}

function drawingSecondDot(e) {
    if (isClicked) {
        if (Figure) {
            selected.changePosition(e.offsetX, e.offsetY);
            clearCanvasForRendering();
            drawingFigures(figures);
        } else {
            selected.moveFigure(e.offsetX, e.offsetY, offsetX, offsetY);
            clearCanvasForRendering();
            drawingFigures(figures);
        }
    }
}

function endDrawingAShape() {
    selected = false;
    isClicked = false;
}

function clearCanvasForRendering() {
    ctx.clearRect(0, 0, example.width, example.height);
}

function clearCanvas() { // eslint-disable-line

    ctx.clearRect(0, 0, example.width, example.height);
    figures = [];
}

function drawingFigures() {
    for (var i = 0; i < figures.length; i++) {
        figures[i].render(ctx);
    }
}

function figureColor() { // eslint-disable-line
    color = colorValue.value;
    divRandomColor.style.backgroundColor = color;
}

function inheritPrototype(child, parent) { // eslint-disable-line
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function colorHandler() { // eslint-disable-line
    color = getRandomColor();

    divRandomColor.style.backgroundColor = color;
    colorValue.value = color;
}

function getRandomColor() {
    var r = getRandomArbitrary(0, 256).toFixed(0);
    var g = getRandomArbitrary(0, 256).toFixed(0);
    var b = getRandomArbitrary(0, 256).toFixed(0);

    return 'RGB(' + r + ',' + g + ',' + b + ')';
}

body.addEventListener('click', noActiveFigure);

function noActiveFigure(e) {
    if (e.target.tagName === 'BODY') {
        console.log('kek');
        borderCanvasLeft.clearRect(0, 0, example.width, example.height);
        borderCanvasLeft.strokeStyle = '#000000';
        borderCanvasLeft.strokeRect(20, 30, 200, 50);

        borderCanvasLeft.beginPath();
        borderCanvasLeft.arc(125, 160, 50, 0, 260);
        borderCanvasLeft.stroke();


        borderCanvasLeft.beginPath();
        borderCanvasLeft.moveTo(20, 250);
        borderCanvasLeft.lineTo(220, 250);
        borderCanvasLeft.closePath();
        borderCanvasLeft.stroke();

        Figure = 0;
    }
}

function colorButton(argument) { // eslint-disable-line
    color = argument;

    colorValue.value = color;
    divRandomColor.style.backgroundColor = color;
}

window.onload = init;
