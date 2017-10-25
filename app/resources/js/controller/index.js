MYAPP.controllers = (function () {
    var color = MYAPP.model.color;
    var figures = MYAPP.model.figures;
    var selected = MYAPP.model.selected;
    var colorValue = MYAPP.view.colorValue;
    var divRandomColor = MYAPP.view.divRandomColor;

    function clearCanvas() { // eslint-disable-line
        if (selected) {
            var deleteFigure = figures.filter(function (obj) {
                return obj.title !== selected.title;
            });
            figures = deleteFigure;
            drawingFigures();
        } else {
            MYAPP.view.ctx.clearRect(0, 0, MYAPP.view.example.width, MYAPP.view.example.height);
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

    function colorHandler() { // eslint-disable-line
        colorButton(getRandomColor());
    }

    function colorButton(argument) { // eslint-disable-line
        color = argument;

        colorValue.value = color;
        divRandomColor.style.backgroundColor = color;
    }

    return {

        loadFromJSON: loadFromJSON,
        saveToJSON: saveToJSON,
        clearFigurePressDelete: clearFigurePressDelete,
        figureColor: figureColor,
        clearCanvas: clearCanvas
    };
})();
