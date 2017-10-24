var figures = [];
var color = '#000';
var id = 0;
var selected, isClicked, Figure, offsetX, offsetY;

function beginDrawingAShape(e) {
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

function drawingSecondDot(e) {
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

function endDrawingAShape() {
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
