var example = document.getElementById('example');
var ctx = example.getContext('2d');
var colorValue = document.getElementById('color');
var divRandomColor = document.getElementById('randomcolor');
var canvasMenu = document.getElementById('canvasLeft');
var borderCanvasLeft = canvasMenu.getContext('2d');


var CLASSES = {Square: Square, Line: Line, Circle: Circle};
var MYAPP = {
    constructors: {},
    model: {},
    controllers: {},
    view: {},
    util: {}
};

example.width = 847;
example.height = 500;

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


function clearCanvas() { // eslint-disable-line
    if (selected) {
        var deleteFigure = figures.filter(function (obj) {
            return obj.title !== selected.title;
        });
        figures = deleteFigure;
        drawingFigures();
    } else {
        ctx.clearRect(0, 0, example.width, example.height);
        figures = [];
    }
}

function figureColor() { // eslint-disable-line
    if (selected) {
        color = colorValue.value;
        selected.color = color;

        drawingFigures();
    } else {
        color = colorValue.value;
        divRandomColor.style.backgroundColor = color;
    }
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
        selected.isSelected = false;
        selected = false;
        drawingFigures();
    }
}

function colorButton(argument) { // eslint-disable-line
    color = argument;

    colorValue.value = color;
    divRandomColor.style.backgroundColor = color;
}

addEventListener('keydown', clearFigurePressDelete);

function clearFigurePressDelete(event) {
    if (selected && event.keyCode === 46) {
        var deleteFigure = figures.filter(function (obj) {
            return obj.title !== selected.title;
        });
        figures = deleteFigure;
        drawingFigures(figures);
    }
}

function saveToJSON() { // eslint-disable-line
    var jsontext = document.getElementById('jsontext');
    jsontext.value = JSON.stringify(figures);
}

function loadFromJSON() { // eslint-disable-line
    var jsontext = document.getElementById('jsontext');
    var figuresjson = JSON.parse(jsontext.value);
    console.log(figuresjson);
    for (var i = 0; i < figuresjson.length; i++) {
        Figure = CLASSES[figuresjson[i].figure];
        console.log(Figure);
        var obj = new Figure(figuresjson[i].title, figuresjson[i].x, figuresjson[i].y, figuresjson[i].width, figuresjson[i].height, figuresjson[i].color, figuresjson[i].isSelected);
        figures.push(obj);
    }
    Figure = false;
    drawingFigures();
}

window.onload = init;
