"use strict";

window.onload = function(){

	var c=document.getElementById("canvas3");
  var ctx=c.getContext("2d");
  var img=new Image();
  		img.src= "navireredresse.jpg";
	console.log(img);
  ctx.drawImage(img,10,10,200,200);
  var img2=new Image();
  		img2.src = "coque1.jpg";
  console.log(img2);
  ctx.drawImage(img2,210,210,200,200);
  img2.addEventListener('load', function () {

    var interval = setInterval(function() {
      var x = 0, y = 0;

      return function () {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.drawImage(img, x, y);

        x += 1;
        if (x > ctx.canvas.width) {
          x = 0;
        }
      };
    }(), 1000/40);
  },false);


	var canvas = document.querySelector('#canvas'),
		contexte = canvas.getContext('2d');

	// le degrade
	var degrade = contexte.createLinearGradient(0,0,0,400);
	degrade.addColorStop(0,'#50e786');
	degrade.addColorStop(1,'#1e5030');

	//rectangle du dégradé
	contexte.fillStyle = degrade;
	contexte.fillRect(0,0,700,400);

	//rectangle bleu qui a les dimensions d'un carré
	contexte.fillStyle = "blue";
	contexte.fillRect(100,140,200,200);

	//petit carré rouge 
	contexte.fillStyle = "rgba(255,0,0,0.5)";
	contexte.fillRect(140,125,30,30);

	//contexte.fillStyle = "rgba(255,0,0,0.5)";
	contexte.fillRect(200,200,30,30);
		
	//ligne de contour d'un rectangle
	contexte.lineWidth = "4";
	contexte.strokeStyle = "yellow";
	contexte.strokeRect(50,50,70,70);

	//ligne de contour d'un rectangle
	contexte.lineWidth = "6";
	contexte.strokeStyle = "lightblue";
	contexte.strokeRect(100,137,203,206);

	// création du triangle
	contexte.lineWidth = "3";
	contexte.strokeStyle = "#fff";
	contexte.beginPath();
	contexte.moveTo(15,15);
	contexte.lineTo(150,60);
	contexte.lineTo(40,200);
	contexte.closePath();
	contexte.stroke();

	//prend la dernière couleur du fillStyle
	//création d'un rond
	contexte.beginPath();
	contexte.arc(50,50, 50,0,2*Math.PI);
	contexte.fill();

	//courbe de bézier
	contexte.moveTo(50,50);
	contexte.bezierCurveTo(200,50,300,50,325,200);
	contexte.stroke();

	//import d'une image
	var img = new Image();
	img.src = "navireredresse.jpg";
	contexte.drawImage(img,200,150);

	//Ajout d'un texte
	contexte.font = "bold 14px Arial";
	contexte.fillStyle = "yellow"
	contexte.fillText("Javascript, le canvas",20,370);

	var canvas2 = document.querySelector('#canvas2'),
			context = canvas2.getContext('2d');

	context.fillStyle = "red";
	context.save();
	context.translate(100,100);
	context.fillStyle = "green";
	context.fillRect(0,0,100,100);
	context.restore();
	context.fillRect(0,0,100,100);

	var img2 = new Image();
	img2.src = "navireredresse.jpg";
	//context.translate(59,0);
	context.rotate(90 * Math.PI / 180);
	context.drawImage(img2,0,0);



};


// Rect ( pos X, pos Y, width, height )
// Arc ( x, y, rayon, angleDepart, angleFin, sens)




