var MYAPP = {
    constructors: {},
    model: {},
    controllers: {},
    view: {},
    util: {}
};

function init() {
    var canvasMenu = MYAPP.view.canvasMenuLeft;

    canvasMenu.width = 250;
    canvasMenu.height = 310;

    canvasMenu.beginPath();
    canvasMenu.arc(125, 160, 50, 0, 260);
    canvasMenu.stroke();


    canvasMenu.beginPath();
    canvasMenu.moveTo(20, 250);
    canvasMenu.lineTo(220, 250);
    canvasMenu.closePath();
    canvasMenu.stroke();

    canvasMenu.strokeRect(20, 30, 200, 50);
    canvasMenu.strokeStyle = '#8B0000';

    MYAPP.view.on();
}

window.onload = init;
