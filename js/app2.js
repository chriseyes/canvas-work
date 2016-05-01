"use strict";

window.onload = function(){

	var c=document.getElementById("canvas");
  var ctx=c.getContext("2d");

 var drawimage = function(context,src,x,y,width,height){
 		var image = new Image();
 		image.src = src;
 		context.drawImage(image,x,y,width,height);
 };

 drawimage(ctx,"navire.jpg",0,0,738,498);


	var offset = 0;

	var draw = function(ctx) {
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
	};
function drw() {
  offset++;
  if(offset > 1600){
    offset = 0
  }
  draw(ctx);
  setTimeout(drw,20);
};
drw();
// draw(ctx);

// var circles = [];

// var draw = function (context, x, y, fillcolor, radius, linewidth, strokestyle, fontcolor, textalign, fonttype, filltext) {
//     context.beginPath();
//     context.arc(x, y, radius, 0, 2 * Math.PI, false);
//     context.fillStyle = fillcolor;
//     context.fill();
//     context.lineWidth = linewidth;
//     context.strokeStyle = strokestyle;
//     context.stroke();
    
//     context.fillStyle = fontcolor;
//     context.textAlign = textalign;
//     context.font = fonttype;
    
//     context.fillText(filltext, x, y);    
// };

// var Circle = function(x, y, radius) {
//     this.left = x - radius;
//     this.top = y - radius;
//     this.right = x + radius;
//     this.bottom = y + radius;
// };

// var drawCircle = function (context, x, y, fillcolor, radius, linewidth, strokestyle, fontcolor, textalign, fonttype, filltext, circles) {
//     draw(context, x, y, fillcolor, radius, linewidth, strokestyle, fontcolor, textalign, fonttype, filltext);
//     var circle = new Circle(x, y, radius);
//     circles.push(circle);  
// };

// drawCircle(ctx, 300, 100, "green", 30, 5, "#003300", "white", "center", "bold 20px Arial", "1", circles);
// drawCircle(ctx, 600, 100, "blue", 30, 5, "#003300", "white", "center", "bold 20px Arial", "2", circles);

// $('#canvas').on('click',function (e) {
//     var clickedX = e.pageX - this.offsetLeft;
//     var clickedY = e.pageY - this.offsetTop;
    
//     for (var i = 0; i < circles.length; i++) {
//         if (clickedX < circles[i].right && clickedX > circles[i].left && clickedY > circles[i].top && clickedY < circles[i].bottom) {
//             alert ('clicked number ' + (i + 1));
//         }
//     }
// });



};