MYAPP.controllers = (function () {
    var m = MYAPP.model;

    var keyDelete = 46;

    function clearCanvas() { // eslint-disable-line
        if (m.selected) {
            var deleteFigure = m.figures.filter(function (obj) {
                return obj.title !== m.selected.title;
            });
            m.figures = deleteFigure;
            MYAPP.view.drawingFigures();
        } else {
            MYAPP.view.ctx.clearRect(0, 0, MYAPP.view.example.width, MYAPP.view.example.height);
            m.figures = [];
        }
    }

    function figureColor() {     // eslint-disable-line
        console.log('kek');
        var colorValue = MYAPP.view.colorValue;
        var divRandomColor = MYAPP.view.divRandomColor;
        if (MYAPP.model.selected) {
            m.color = colorValue.value;
            m.selected.color = m.color;
            console.log('kek2');
            MYAPP.view.drawingFigures();
        } else {
            m.color = colorValue.value;
            divRandomColor.style.backgroundColor = m.color;
            console.log('kek3');
        }
    }

    function clearFigurePressDelete(event) {
        if (m.selected && event.keyCode === keyDelete) {
            var deleteFigure = m.figures.filter(function (obj) {
                return obj.title !== m.selected.title;
            });
            m.figures = deleteFigure;
            MYAPP.view.drawingFigures(m.figures);
        }
    }

    function saveToJSON() { // eslint-disable-line
        var jsontext = document.getElementById('jsontext');
        jsontext.value = JSON.stringify(m.figures);
    }

    function loadFromJSON() { // eslint-disable-line
        var jsontext = document.getElementById('jsontext');
        var figuresjson = JSON.parse(jsontext.value);
        console.log(figuresjson);
        for (var i = 0; i < figuresjson.length; i++) {
            Figure = MYAPP.constructors[figuresjson[i].figure];
            console.log(Figure);
            var obj = new Figure(figuresjson[i].title, figuresjson[i].x, figuresjson[i].y, figuresjson[i].width, figuresjson[i].height, figuresjson[i].color, figuresjson[i].isSelected);
            m.figures.push(obj);
        }
        Figure = false;
        MYAPP.view.drawingFigures();
    }

    function colorHandler() { // eslint-disable-line
        colorButton(MYAPP.util.getRandomColor());
        MYAPP.view.drawingFigures();
    }

    function colorButton(argument) { // eslint-disable-line

        var colorValue = MYAPP.view.colorValue;
        var divRandomColor = MYAPP.view.divRandomColor;
        m.color = argument;

        colorValue.value = m.color;
        divRandomColor.style.backgroundColor = m.color;
    }

    function filterMenuColorBtn(btn) {

        return function () {

            m.color = btn.getAttribute('data-color');
            colorButton(m.color);
        }
    }


    return {
        loadFromJSON: loadFromJSON,
        saveToJSON: saveToJSON,
        clearFigurePressDelete: clearFigurePressDelete,
        figureColor: figureColor,
        clearCanvas: clearCanvas,
        colorHandler: colorHandler,
        colorButton: colorButton,
        filterMenuColorBtn: filterMenuColorBtn
    };
})
();

