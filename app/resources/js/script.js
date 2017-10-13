var example = document.getElementById("example"),
	ctx = example.getContext('2d');
	ctx2 = example.getContext('2d');
            example.width  = 900;
            example.height = 500;
            ctx.strokeStyle = 'fff';
            ctx.strokeRect(15, 15, 870, 460);
            ctx.strokeRect(18, 18, 864, 454);
 var figure;
 var figures = [];
 var radius =  0;
 var color = '#000';

    for(var j=0; j < 160;j++){
        ctx.beginPath();
        var x = 250; // x coordinate
        var y = 250; // y coordinate
        radius += 1; // Arc radius
        var startAngle = 0; // Starting point on circle
        var endAngle = 360; // End point on circle
        var anticlockwise = false; // clockwise or anticlockwise

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        ctx.stroke();
      }

     ctx.strokeStyle = '#FF0000';
 var radius2 = 0;
 var x2 = 350;
 var y2 = 50;
    for(var j=0; j < 160;j++){
        ctx.beginPath();
        x2 -= 5; // x coordinate
        y2 += 7; // y coordinate
        radius2 += 4; // Arc radius
        var startAngle = 0; // Starting point on circle
        var endAngle = 360; // End point on circle
        var anticlockwise = false; // clockwise or anticlockwise

        ctx.arc(x2, y2, radius2, startAngle, endAngle, anticlockwise);
        ctx.stroke();
      }

 var radius4 = 0;
 var x4 = 350;
 var y4 = 50;
    for(var j=0; j < 160;j++){
        ctx.beginPath();
        x4 += 5; // x coordinate
        y4 += 7; // y coordinate
        radius4 += 4; // Arc radius
        var startAngle = 0; // Starting point on circle
        var endAngle = 360; // End point on circle
        var anticlockwise = false; // clockwise or anticlockwise

        ctx.arc(x4, y4, radius4, startAngle, endAngle, anticlockwise);
        ctx.stroke();
      }
 var radius3 =  0;
 var height3 = 0;
 var x3 = 600;
 var y3 = 250;
ctx.strokeStyle = '#00FF00'
    for(var j=0; j < 160;j++){
        ctx.beginPath();
        x3 += 5; // x coordinate
        y3 -= 5 ; // y coordinate
        radius3 += 21; // Arc radius
        var startAngle = 0; // Starting point on circle
        var endAngle = 360; // End point on circle
        var anticlockwise = false; // clockwise or anticlockwise
        height3 += 1;
        ctx.arc(x3, y3, radius3, startAngle, endAngle, anticlockwise);
        ctx.stroke();

        ctx.strokeRect(x-600, y-250, height3, height3);


      }    


var canvasMenu = document.getElementById("canvasLeft"),
	borderCanvasLeft = canvasMenu.getContext('2d');


	canvasLeft.width = 280;
	canvasLeft.height = 300;

	borderCanvasLeft.strokeRect(0, 0, 280, 300);
    borderCanvasLeft.strokeRect(4, 4, 272, 292);

    borderCanvasLeft.beginPath();
    borderCanvasLeft.arc(100, 150, 50, 0, 260);
    borderCanvasLeft.stroke();


	borderCanvasLeft.beginPath();
	borderCanvasLeft.moveTo(30, 250);
	borderCanvasLeft.lineTo(240, 250);
	borderCanvasLeft.closePath();
    borderCanvasLeft.stroke();

    borderCanvasLeft.strokeRect(30, 30, 220, 50);
    borderCanvasLeft.strokeStyle = '#8B0000';

canvasMenu.addEventListener('click', activeFigure);

function activeFigure(e){

	if (e.offsetY <= 95){
		borderCanvasLeft.clearRect(0, 0, example.width, example.height);
		borderCanvasLeft.strokeStyle = '#000000';
		borderCanvasLeft.strokeRect(30, 30, 220, 50);
		borderCanvasLeft.strokeRect(0, 0, 280, 300);
	    borderCanvasLeft.strokeRect(4, 4, 272, 292);

	    borderCanvasLeft.beginPath();
	    borderCanvasLeft.arc(100, 150, 50, 0, 260);
	    borderCanvasLeft.stroke();


		borderCanvasLeft.beginPath();
		borderCanvasLeft.moveTo(30, 250);
		borderCanvasLeft.lineTo(240, 250);
		borderCanvasLeft.closePath();
	    borderCanvasLeft.stroke();

	    borderCanvasLeft.strokeStyle = '#8B0000';
	   
	    borderCanvasLeft.strokeRect(20, 20, 240, 70);
	    
	    figure = Square;
	} else if (e.offsetY <= 200) {
		borderCanvasLeft.clearRect(0, 0, example.width, example.height);
		borderCanvasLeft.strokeStyle = '#000000';
		borderCanvasLeft.strokeRect(30, 30, 220, 50);
		borderCanvasLeft.strokeRect(0, 0, 280, 300);
	    borderCanvasLeft.strokeRect(4, 4, 272, 292);

	    borderCanvasLeft.beginPath();
	    borderCanvasLeft.arc(100, 150, 50, 0, 260);
	    borderCanvasLeft.stroke();


		borderCanvasLeft.beginPath();
		borderCanvasLeft.moveTo(30, 250);
		borderCanvasLeft.lineTo(240, 250);
		borderCanvasLeft.closePath();
	    borderCanvasLeft.stroke();

	    borderCanvasLeft.strokeStyle = '#8B0000';
		borderCanvasLeft.strokeRect(40, 90, 120, 120);
	    
	    figure = Circle;
	}
	else if (e.offsetY <= 300) {
		borderCanvasLeft.clearRect(0, 0, example.width, example.height);
		borderCanvasLeft.strokeStyle = '#000000';
		borderCanvasLeft.strokeRect(30, 30, 220, 50);
		borderCanvasLeft.strokeRect(0, 0, 280, 300);
	    borderCanvasLeft.strokeRect(4, 4, 272, 292);

	    borderCanvasLeft.beginPath();
	    borderCanvasLeft.arc(100, 150, 50, 0, 260);
	    borderCanvasLeft.stroke();


		borderCanvasLeft.beginPath();
		borderCanvasLeft.moveTo(30, 250);
		borderCanvasLeft.lineTo(240, 250);
		borderCanvasLeft.closePath();
	    borderCanvasLeft.stroke();

	    borderCanvasLeft.strokeStyle = '#8B0000';

		borderCanvasLeft.strokeRect(20, 240, 250, 20);

	    figure = Line;
	}
}

var heightSquare = document.getElementById("height"),
	widthSquare = document.getElementById("width");

example.addEventListener('mousedown', ClickCanvas);
example.addEventListener('mousemove', ClickCanvas2);
example.addEventListener('mouseup', ClickCanvas3);

var figureX, figureY, selected, isClicked;

var i = 0;
var colorValue;
function ClickCanvas(e) {
		
		var obj = new figure(i++, e.offsetX, e.offsetY, undefined, undefined, color);
		selected = obj;
		selected.color = color;
		figures.push(obj);
		obj.render(ctx);
		isClicked = true;
console.log(selected.x, selected.y, selected.height, selected.width);
	/*	figureX = e.offsetX;
		figureY = e.offsetY;

	if (figure == Square) {
		var obj = new figure(i++, figureX, figureY, e.offsetX - figureX, e.offsetY - figureY);
		figures.push(obj);
		obj.render(ctx);
	} else if(figure == Line){
		var obj = new figure(i++, figureX, figureY, e.offsetX, e.offsetY);
		figures.push(obj);
		obj.render(ctx);
	} else if(figure == Circle){
		var obj = new figure(i++, figureX, figureY, Math.abs(e.offsetX - figureX), Math.abs(e.offsetY - figureY));
		figures.push(obj);
		obj.render(ctx);
	} */
	}

function ClickCanvas2(e){
	if(isClicked){
		clearCanvas();
	}
	
	if (figure == Square) {
	selected.height = e.offsetY - selected.y;
	selected.width = e.offsetX - selected.x;
	
} else if(figure == Circle){
	selected.height = Math.abs((selected.x + selected.y) - (e.offsetX + e.offsetY));
} else if(figure == Line){
	selected.height = e.offsetY;
	selected.width = e.offsetX;
}

	pictureFigures(figures);
}
function ClickCanvas3(e){
 selected = false;
}


function clearCanvas(e){

	ctx.clearRect(0, 0, example.width, example.height);
	ctx.strokeStyle = '#000000';
	ctx.strokeRect(15, 15, 870, 460);
    ctx.strokeRect(18, 18, 864, 454);

}



function pictureFigures(figures) {
	for (var i = 0; i < figures.length; i++){
		figures[i].render(ctx);

	}
}


function figureColor(){
	colorValue = document.getElementById('color');
	color = colorValue.value;
}

function inheritPrototype(child, parent){
	child.prototype = Object.create(parent.prototype)
	child.prototype.constructor = child;
}

var line1 = new Line('line', 10, 10, 50, 50);
line1.render(ctx);

var square1 = new Square('square', 50, 50, 150, 150);
square1.render(ctx);

