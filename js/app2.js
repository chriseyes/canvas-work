"use strict";

window.onload = function(){

	var c = document.getElementById("canvas"),
			ctx = c.getContext("2d"),
  		pixelRatio = window.devicePixelRatio,
  		mouseX = 999,
  		mouseY = 999;


console.log("Pixel ratio : "+window.devicePixelRatio);
// for the retina screen
if (pixelRatio > 1) {
    var canvasWidth = c.width,
    		canvasHeight = c.height;
    		
    c.width = canvasWidth * pixelRatio;
    c.height = canvasHeight * pixelRatio;
    c.style.width = canvasWidth;
    c.style.height = canvasHeight;
    ctx.scale(pixelRatio, pixelRatio);
};

//function for drawing an image
 var drawimage = function(context,src,x,y,width,height){
 		var image = new Image();
 		image.src = src;
 		context.drawImage(image,x,y,width,height);
 };

 drawimage(ctx,"navire.jpg",0,0,738,498);

	var pieces = [],
			offset = 0;
	
// function for write a text
function writeMessage(canvas, message, x, y) {
  ctx.clearRect(490, 5, 250, 20);
  ctx.fillStyle="rgba(251,244,230,1)";
  ctx.font = '12pt Calibri';
  ctx.fillStyle = 'black';
  ctx.fillText(message, x, y);
};

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};

canvas.addEventListener('mousemove', function(evt) {
  var mousePos = getMousePos(canvas, evt);
  var message = 'x : ' + mousePos.x + ', y :' + mousePos.y.toFixed(0);
  writeMessage(c, message, 635, 20);
}, false);

// var eventSurvol = function(ctx){

// 	c.addEventListener('mousemove',function(e){
// 		var posX = e.pageX - this.offsetLeft;
//     var posY = e.pageY - this.offsetTop;

// 	});
// };


function findOffset(obj) {
    var curX = 0, 
        curY = 0;
    console.log(curX);
    if (obj.offsetParent) {
        do {
            curX += obj.offsetLeft;
            curY += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return {x:curX,y:curY};
    }
}

function updateCanvas(e){
    var pos = findOffset(canvas);
    console.log(pos);
    mouseX = e.pageX - pos.x;
    mouseY = e.pageY - pos.y;
    //console.log(mouseX);
    // ctx.clearRect(0,0,canvas.width,canvas.height);

  	courbedetambot(ctx);
		gouvernail(ctx);
}


	var gouvernail = function(ctx) {
		ctx.save();
		ctx.fillStyle = "rgba(98, 134, 136, 0.6)";
		ctx.strokeStyle = "rgba(255, 255, 255,1)";
		ctx.lineWidth = 1;
		//setlineDash([longueur du contour, expacement des traits])
		ctx.setLineDash([20, 10]);
		ctx.lineCap = 'round';
		ctx.lineJoin = 'round';
		ctx.lineDashOffset = -offset;
		ctx.beginPath();
		ctx.moveTo(47.668,211.001);
		ctx.lineTo(54.335,211.001);
		ctx.lineTo(68.002,349.334);
		ctx.lineTo(69.668,350.668);
		ctx.lineTo(69.668,354.334);
		ctx.lineTo(69.668,358.334);
		ctx.lineTo(52.335,358.334);
		ctx.lineTo(44.668,257.334);
		ctx.lineTo(48.668,253.334);
		ctx.lineTo(48.668,250.668);
		ctx.lineTo(50.002,249);
		ctx.lineTo(47.668,211.001);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		ctx.restore();
		if (ctx.isPointInPath(mouseX*pixelRatio, mouseY*pixelRatio)) {
	    canvas.style.cursor = 'pointer';
	    ctx.fillStyle = "rgba(0, 0, 0, 1)";
	    ctx.fill();
	    console.log("dedans 1");
	  }else{
	  	canvas.style.cursor = 'default';
	  };
		
	};

	var courbedetambot = function(ctx) {
		ctx.save();
		ctx.fillStyle = "rgba(98, 134, 136, 0.6)";
		ctx.strokeStyle = "rgba(255, 255, 255,1)";
		ctx.miterLimit = 10;
		ctx.beginPath();
		ctx.moveTo(68,295);
		ctx.lineTo(72.5,295);
		ctx.bezierCurveTo(72.5,325.5,81.25,335.25,120.5,337.5);
		ctx.lineTo(120.5,340.5);
		ctx.lineTo(72.5,337.5);
		ctx.lineTo(68,295);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		ctx.restore();
		if (ctx.isPointInPath(mouseX*pixelRatio, mouseY*pixelRatio)) {
	    canvas.style.cursor = 'pointer';
	    ctx.fillStyle = "rgba(0, 0, 0, 1)";
	    ctx.fill();
	    console.log("dedans 2");
	  }else{
	  	canvas.style.cursor = 'default';
	  	ctx.fillStyle = "rgba(98, 134, 136, 1)";
	  };
	};

	courbedetambot(ctx);
	gouvernail(ctx);
	// eventSurvol(ctx);
canvas.addEventListener('mousemove',updateCanvas,false);

// var offset = 0;
// function drw() {
//   offset++;
//   if(offset > 1600){
//     offset = 0
//   }
//   gouvernail(ctx);
//   setTimeout(drw,20);
// };
// drw();
// draw(ctx);

};