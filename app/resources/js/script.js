var MYAPP = {
    constructors: {},
    model: {},
    controllers: {},
    view: {},
    util: {}
};

function init() {
    var canvasMenu = MYAPP.view.canvasMenu;
    var canvasMenuLeft = MYAPP.view.canvasMenuLeft;

    MYAPP.view.canvasMenu.width = 250;
    canvasMenu.height = 310;

    canvasMenuLeft.beginPath();
    canvasMenuLeft.arc(125, 160, 50, 0, 260);
    canvasMenuLeft.stroke();


    canvasMenuLeft.beginPath();
    canvasMenuLeft.moveTo(20, 250);
    canvasMenuLeft.lineTo(220, 250);
    canvasMenuLeft.closePath();
    canvasMenuLeft.stroke();

    canvasMenuLeft.strokeRect(20, 30, 200, 50);
    canvasMenuLeft.strokeStyle = '#8B0000';

    MYAPP.view.on();
}

window.onload = init;
