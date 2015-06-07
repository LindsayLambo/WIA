/*
     Name: Lindsay Lambert
     Date: June 3, 2015
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a height of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/
window.onload = function(){
	var theCanvas = document.getElementById("Canvas1");
	if (theCanvas && theCanvas.getContext) {
		var ctx = theCanvas.getContext("2d");
		if(ctx){
			//Draw Rectangle here
			ctx.fillStyle = "rgb(41, 74, 143)";
			ctx.strokeStyle = "#000";
			ctx.lineWidth = 5;
			ctx.fillRect(0, 0, 50, 100);
			ctx.strokeRect(0, 0, 50, 100);
			
		}
	}
}
			


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/

	var theCanvas = document.getElementById("Canvas2");
	if (theCanvas && theCanvas.getContext) {
		var ctx = theCanvas.getContext("2d");
		if(ctx){
			//Draw Circle here
			ctx.fillStyle = "rgba(148, 13, 13, 0.5)";
			ctx.strokeStyle = "#000";
			var degrees = 360;
			var radians = (degrees/180) * Math.PI;
			ctx.beginPath();
			ctx.arc(50, 50, 30, 0, radians);
			ctx.fill();
			ctx.stroke();
		}
	}





/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/

	var theCanvas = document.getElementById("Canvas3");
	if (theCanvas && theCanvas.getContext) {
		var ctx = theCanvas.getContext("2d");
		if(ctx){
			//Draw Star here
			ctx.strokeStyle = "rgb(10, 115, 10)";
			ctx.fillStyle= "rgb(92, 196, 92)";
			ctx.lineWidth = 5;
			ctx.beginPath();
			ctx.moveTo(100, 100); //100,10 40,200 190,80 10,80 160,200
			ctx.lineTo(200, 25); 
			ctx.lineTo(225, 125); 
			ctx.lineTo(300, 165);  
			ctx.lineTo(200, 185); 
			ctx.lineTo(165, 300); 
			ctx.lineTo(135, 160); 
			ctx.lineTo(50, 200); 
			ctx.lineTo(75, 75); 
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
		}
	}



/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

	var theCanvas = document.getElementById('Canvas4');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if(ctx){
		//Draw Umbrella top here
		ctx.strokeStyle = "rgb(10, 115, 10)";
		ctx.fillStyle= "rgb(92, 196, 92)";
		ctx.lineWidth = 5;
		ctx.beginPath();
		ctx.moveTo(100,200);
		ctx.quadraticCurveTo(300,25, 465, 200);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(100,200);
		ctx.bezierCurveTo(125,175, 165, 170, 215, 215);
		ctx.stroke();
		ctx.moveTo(215, 215);
		ctx.bezierCurveTo(225,185, 270, 170, 330, 215);
		ctx.stroke();
		ctx.moveTo(330,215);
		ctx.bezierCurveTo(325,195, 380, 170, 440, 215);
		ctx.stroke();
		ctx.moveTo(440,215);
		ctx.bezierCurveTo(445,175, 465, 197, 460, 200);
		ctx.stroke();
		}
	}


/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

	var theCanvas = document.getElementById("Canvas5");
	if (theCanvas && theCanvas.getContext) {
		var ctx = theCanvas.getContext("2d");
		if(ctx){
		//Draw text here
		var textString = "My Wonderful String of Text";
		ctx.font = "30pt Helvetica";
		ctx.strokeStyle = "rgb(10, 115, 10)";
		ctx.fillStyle= "rgb(92, 196, 92)";
		ctx.fillText(textString, 100, 100);
		ctx.strokeText(textString, 100, 100);

		}
	}


/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

	var theCanvas = document.getElementById("Canvas1");
	if (theCanvas && theCanvas.getContext) {
		var ctx = theCanvas.getContext("2d");
		if(ctx){
		//Draw images here
		
		}
	}



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

	var theCanvas = document.getElementById("Canvas7");
	if (theCanvas && theCanvas.getContext) {
		var ctx = theCanvas.getContext("2d");
		if(ctx){
		// Draw scene here
		
		}
	}


