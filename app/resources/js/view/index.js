MYAPP.view = (function () {
    var example = document.getElementById('example');
    var ctx = example.getContext('2d');
    var colorValue = document.getElementById('color');
    var divRandomColor = document.getElementById('randomcolor');
    var canvasMenu = document.getElementById('canvasLeft');
    var borderCanvasLeft = canvasMenu.getContext('2d');
    var m = MYAPP.model.selected;

    example.width = 847;
    example.height = 500;


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

    return {
        beginDrawingAShape: beginDrawingAShape,
        drawingSecondDot: drawingSecondDot,
        drawingFigures: drawingFigures,

    }
})()

