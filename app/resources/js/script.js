var MYAPP = {
    constructors: {},
    model: {},
    controllers: {},
    view: {},
    util: {}
};



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

    MYAPP.controllers.on();
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

window.onload = init;
