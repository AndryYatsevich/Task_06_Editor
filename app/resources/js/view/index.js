MYAPP.view = (function () {
    var example = document.getElementById('example');
    var ctx = example.getContext('2d');
    var colorValue = document.getElementById('color');
    var divRandomColor = document.getElementById('randomcolor');
    var canvasMenu = document.getElementById('canvasLeft');
    var canvasMenuLeft = canvasMenu.getContext('2d');
    var changeColor = document.getElementById('changeColor');
    var randomColorBtn = document.getElementById('randomColorBtn');
    var isClicked = MYAPP.model.isClicked;
    var color = MYAPP.model.color;
    var figures = MYAPP.model.figures;
    var selected = MYAPP.model.selected;
    var Figure = MYAPP.model.Figure;
    var id = MYAPP.model.id;

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

            Figure = MYAPP.constructors.Square;
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

            Figure = MYAPP.constructors.Circle;
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

            Figure = MYAPP.constructors.Line;
        }
    }

    function beginDrawingAShape(e) { // eslint-disable-line
        if (!Figure) {
            selected = false;
            for (var i = 0; i < figures.length; i++) {
                figures[i].isSelected = false;
                if (figures[i].changeCollision(e.offsetX, e.offsetY) && (!selected || figures[i].title > selected.title)) {
                    selected = figures[i];
                }
            }
            if (selected) {
                isClicked = true;
                offsetX = e.offsetX - selected.x;
                offsetY = e.offsetY - selected.y;
                selected.isSelected = true;
                drawingFigures();
            }
        } else {
            var obj = new Figure(id++, e.offsetX, e.offsetY, null, null, color);
            selected = obj;
            selected.color = color;
            figures.push(obj);
            drawingFigures();
            isClicked = true;
        }
    }

    function drawingSecondDot(e) { // eslint-disable-line
        if (isClicked) {
            if (Figure) {
                selected.changePosition(e.offsetX, e.offsetY);

                drawingFigures();
            } else {
                selected.moveFigure(e.offsetX, e.offsetY, offsetX, offsetY);

                drawingFigures();
            }
        }
    }

    function endDrawingAShape() { // eslint-disable-line
        if (Figure) {
            selected.isSelected = false;
            selected = false;
        }
        isClicked = false;
        drawingFigures();
    }


    function drawingFigures() {
        ctx.clearRect(0, 0, example.width, example.height);
        for (var i = 0; i < figures.length; i++) {
            if (figures[i].isSelected) {
                ctx.shadowColor = '#000000';
                ctx.shadowBlur = 20;
            } else {
                ctx.shadowBlur = 0;
            }

            figures[i].render(ctx);
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

            Figure = 0;
            selected.isSelected = false;
            selected = false;
            drawingFigures();
        }
    }

    function on() { // eslint-disable-line
        canvasMenu.addEventListener('click', activeFigure);
        example.addEventListener('mousedown', beginDrawingAShape);
        example.addEventListener('mousemove', drawingSecondDot);
        example.addEventListener('mouseup', endDrawingAShape);
        body.addEventListener('click', noActiveFigure);
        changeColor.addEventListener('click', MYAPP.controllers.figureColor);
        randomColorBtn.addEventListener('click', MYAPP.controllers.colorHandler);
        //addEventListener('keydown', MYAPP.controller.clearFigurePressDelete);
        console.log('on');
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
    }
})()

