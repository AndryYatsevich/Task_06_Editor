var example = document.getElementById("example"),
	ctx = example.getContext('2d');
	ctx2 = example.getContext('2d');
            example.width  = 847;
            example.height = 500;
            ctx.strokeStyle = 'fff';
 var figure;
 var figures = [];
 var radius =  0;
 var color = '#000';
/*
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

*/
var canvasMenu = document.getElementById("canvasLeft"),
	borderCanvasLeft = canvasMenu.getContext('2d');


	canvasLeft.width = 250;
	canvasLeft.height = 310;

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

canvasMenu.addEventListener('click', activeFigure);

function activeFigure(e){

	if (e.offsetY <= 95){
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
	    
	    figure = Square;
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
	    
	    figure = Circle;
	}
	else if (e.offsetY <= 300) {
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

function ClickCanvas(e) {
	if(figure == 0){
		for(var i = 0; i < figures.length; i++){
			var figuresSelected = [];
			console.log(figures[i].x, e.offsetX);
			if(e.offsetX == figures[i].x && e.offsetY == figures[i].y){
				figuresSelected.push(figures[i]);
				console.log(figuresSelected);
			}
		}

	} else {
		
		var obj = new figure(i++, e.offsetX, e.offsetY, undefined, undefined, color);
		selected = obj;
		selected.color = color;
		figures.push(obj);
		obj.render(ctx);
		isClicked = true;
}
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
		clearCanvasForRendering();
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

function clearCanvasForRendering(e) {
	ctx.clearRect(0, 0, example.width, example.height);
}

function clearCanvas(e){

	ctx.clearRect(0, 0, example.width, example.height);
	figures = [];
}



function pictureFigures(figures) {
	for (var i = 0; i < figures.length; i++){
		figures[i].render(ctx);

	}
}


function figureColor(){
	var colorValue = document.getElementById('color');
	color = colorValue.value;
	var divRandomColor = document.getElementById('randomcolor');
	divRandomColor.style.backgroundColor = color;
}

function inheritPrototype(child, parent){
	child.prototype = Object.create(parent.prototype)
	child.prototype.constructor = child;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function randomColor(){
	var r = getRandomArbitrary(0, 256).toFixed(0);
	var g = getRandomArbitrary(0, 256).toFixed(0);
	var b = getRandomArbitrary(0, 256).toFixed(0);
	console.log(r);

	color = "RGB("+ r +"," + g + "," + b + ")";
	var divRandomColor = document.getElementById('randomcolor');
	divRandomColor.style.backgroundColor = color;
	var colorValue = document.getElementById('color');
	colorValue.value = color;
	//return color;
	
}

body.addEventListener('click', activLi);

function activLi(e){
	if(e.target.tagName == "BODY"){
		console.log('kek');
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

	    figure = 0;
	}
	
}

function colorButtin(argument){
	color = argument;
	console.log(color);
	var colorValue = document.getElementById('color');
	colorValue.value = color;
	var divRandomColor = document.getElementById('randomcolor');
	divRandomColor.style.backgroundColor = color;
	return color;
}

