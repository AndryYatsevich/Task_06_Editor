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

     ctx.strokeStyle = '#FF0000'
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
function figureColor(){
	var color = document.getElementById('color');
	ctx.strokeStyle = color.value;
	ctx.fillStyle = color.value;
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
	    console.log(event.clientX);
	    console.log(event.clientY);
	    console.log(mousedown.clientX);

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


example.addEventListener('click', ClickCanvas);
var i = 0;
function ClickCanvas(e) {
		
		var obj = new figure(i++, e.offsetX, e.offsetY, heightSquare.value, widthSquare.value);
		figures.push(obj);
		obj.render(ctx);
		console.log(figures);

	/*	function drawASquare() {
			console.log(e.offsetX);
			console.log(e.offsetY);
			ctx2.strokeRect(e.offsetX, e.offsetY, heightSquare.value, widthSquare.value);

			ctx2.strokeStyle = '#8B0000';
		}
	drawASquare(); */
	}
function clearCanvas(){

	ctx.clearRect(0, 0, example.width, example.height);
	ctx.strokeStyle = '#000000';
	ctx.strokeRect(15, 15, 870, 460);
    ctx.strokeRect(18, 18, 864, 454);
	figures = [];
}


function inheritPrototype(child, parent){
	child.prototype = Object.create(parent.prototype)
	child.prototype.constructor = child;
}

var line1 = new Line('line', 10, 10, 50, 50);
line1.render(ctx);
console.log(Square)
var square1 = new Square('square', 50, 50, 150, 150);
square1.render(ctx);

