MYAPP.view = (function () {
    var example = document.getElementById('example');
    var ctx = example.getContext('2d');
    var colorValue = document.getElementById('color-text');
    var divRandomColor = document.getElementById('randomcolor');
    var canvasMenu = document.getElementById('canvasLeft');
    var canvasMenuLeft = canvasMenu.getContext('2d');
    var changeColor = document.getElementById('changeColor');
    var randomColorBtn = document.getElementById('randomColorBtn');
    var clearCanvasBtn = document.getElementById('clearCanvasBtn');
    var loadFromJSONBtn = document.getElementById('loadFromJSONBtn');
    var saveToJSONBtn = document.getElementById('saveToJSONBtn');



   // var menuColorBtnAttribute = menuColorBtn.getAttribute("data-color");
    var m = MYAPP.model;


    example.width = 847;
    example.height = 500;


    function activeFigure(e) {
        if (e.offsetY <= 95) {
            canvasMenuLeft.clearRect(0, 0, example.width, example.height);
            canvasMenuLeft.strokeStyle = '#000000';
            canvasMenuLeft.strokeRect(20, 30, 200, 50);

            canvasMenuLeft.beginPath();
            canvasMenuLeft.arc(125, 160, 50, 0, 260);
            canvasMenuLeft.stroke();


            canvasMenuLeft.beginPath();
            canvasMenuLeft.moveTo(20, 250);
            canvasMenuLeft.lineTo(220, 250);
            canvasMenuLeft.closePath();
            canvasMenuLeft.stroke();

            canvasMenuLeft.strokeStyle = '#FF0000';

            canvasMenuLeft.strokeRect(15, 25, 210, 60);

            m.Figure = MYAPP.constructors.Square;
        } else if (e.offsetY <= 200) {
            canvasMenuLeft.clearRect(0, 0, example.width, example.height);
            canvasMenuLeft.strokeStyle = '#000000';
            canvasMenuLeft.strokeRect(20, 30, 200, 50);

            canvasMenuLeft.beginPath();
            canvasMenuLeft.arc(125, 160, 50, 0, 260);
            canvasMenuLeft.stroke();


            canvasMenuLeft.beginPath();
            canvasMenuLeft.moveTo(20, 250);
            canvasMenuLeft.lineTo(220, 250);
            canvasMenuLeft.closePath();
            canvasMenuLeft.stroke();

            canvasMenuLeft.strokeStyle = '#FF0000';
            canvasMenuLeft.strokeRect(70, 105, 110, 110);

            m.Figure = MYAPP.constructors.Circle;
        } else if (e.offsetY <= 300) {
            canvasMenuLeft.clearRect(0, 0, example.width, example.height);
            canvasMenuLeft.strokeStyle = '#000000';
            canvasMenuLeft.strokeRect(20, 30, 200, 50);

            canvasMenuLeft.beginPath();
            canvasMenuLeft.arc(125, 160, 50, 0, 260);
            canvasMenuLeft.stroke();


            canvasMenuLeft.beginPath();
            canvasMenuLeft.moveTo(20, 250);
            canvasMenuLeft.lineTo(220, 250);
            canvasMenuLeft.closePath();
            canvasMenuLeft.stroke();

            canvasMenuLeft.strokeStyle = '#FF0000';

            canvasMenuLeft.strokeRect(15, 240, 210, 20);

            m.Figure = MYAPP.constructors.Line;
        }
    }

    function beginDrawingAShape(e) { // eslint-disable-line

        if (!m.Figure) {
            m.selected = false;
            for (var i = 0; i < m.figures.length; i++) {
                m.figures[i].isSelected = false;
                if (m.figures[i].changeCollision(e.offsetX, e.offsetY) && (!m.selected || m.figures[i].title > m.selected.title)) {
                    MYAPP.model.selected = m.selected = m.figures[i];
                }
                console.log(m.selected);
            }
            if (m.selected) {
                m.isClicked = true;
                offsetX = e.offsetX - m.selected.x;
                offsetY = e.offsetY - m.selected.y;
                m.selected.isSelected = true;
                drawingFigures();
            }
        } else {
            var obj = new m.Figure(m.id++, e.offsetX, e.offsetY, null, null, m.color);
            m.selected = obj;
            m.selected.color = m.color;
            m.figures.push(obj);
            drawingFigures();
            m.isClicked = true;
        }
    }

    function drawingSecondDot(e) { // eslint-disable-line
        if (m.isClicked) {
            if (m.Figure) {
                m.selected.changePosition(e.offsetX, e.offsetY);

                drawingFigures();
            } else {
                m.selected.moveFigure(e.offsetX, e.offsetY, offsetX, offsetY);

                drawingFigures();
            }
        }
    }

    function endDrawingAShape() { // eslint-disable-line
        if (m.Figure) {
            m.selected.isSelected = false;
            m.selected = false;
        }
        m.isClicked = false;
        drawingFigures();
    }


    function drawingFigures() {
        ctx.clearRect(0, 0, example.width, example.height);
        for (var i = 0; i < m.figures.length; i++) {
            if (m.figures[i].isSelected) {
                ctx.shadowColor = '#000000';
                ctx.shadowBlur = 20;
            } else {
                ctx.shadowBlur = 0;
            }

            m.figures[i].render(ctx);
        }
    }

    function noActiveFigure(e) {
        if (e.target.tagName === 'BODY') {
            canvasMenuLeft.clearRect(0, 0, example.width, example.height);
            canvasMenuLeft.strokeStyle = '#000000';
            canvasMenuLeft.strokeRect(20, 30, 200, 50);

            canvasMenuLeft.beginPath();
            canvasMenuLeft.arc(125, 160, 50, 0, 260);
            canvasMenuLeft.stroke();


            canvasMenuLeft.beginPath();
            canvasMenuLeft.moveTo(20, 250);
            canvasMenuLeft.lineTo(220, 250);
            canvasMenuLeft.closePath();
            canvasMenuLeft.stroke();

            m.Figure = 0;
            m.selected.isSelected = false;
            m.selected = false;
            drawingFigures();
        };
    }

    function on() { // eslint-disable-line
        canvasMenu.addEventListener('click', activeFigure);
        example.addEventListener('mousedown', beginDrawingAShape);
        example.addEventListener('mousemove', drawingSecondDot);
        example.addEventListener('mouseup', endDrawingAShape);
        body.addEventListener('click', noActiveFigure);
        changeColor.addEventListener('click', MYAPP.controllers.figureColor);
        randomColorBtn.addEventListener('click', MYAPP.controllers.colorHandler);
        window.addEventListener('keydown', MYAPP.controllers.clearFigurePressDelete);
        clearCanvasBtn.addEventListener('click', MYAPP.controllers.clearCanvas);
        saveToJSONBtn.addEventListener('click', MYAPP.controllers.saveToJSON);
        loadFromJSONBtn.addEventListener('click', MYAPP.controllers.loadFromJSON);

        console.log('lol');
    }

    return {
        on: on,
        beginDrawingAShape: beginDrawingAShape,
        drawingSecondDot: drawingSecondDot,
        drawingFigures: drawingFigures,
        activeFigure: activeFigure,
        noActiveFigure: noActiveFigure,
        example: example,
        ctx: ctx,
        canvasMenu: canvasMenu,
        canvasMenuLeft: canvasMenuLeft,
        colorValue: colorValue,
        divRandomColor: divRandomColor
    };
})();

