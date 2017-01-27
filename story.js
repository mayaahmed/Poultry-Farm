var ctx = document.getElementById("ctx").getContext("2d"); 
ctx.font = '30px Arial';


var player; var map;

var Img= {};
Img.player = new Image();
Img.player.src="amooma.jpg";

Img.map = new Image();
Img.map.src="village.JPG";


function run(){
/* context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);

img	Specifies the image, canvas, or video element to use	 
sx	Optional. The x coordinate where to start clipping	
sy	Optional. The y coordinate where to start clipping	
swidth	Optional. The width of the clipped image	
sheight	Optional. The height of the clipped image	
x	The x coordinate where to place the image on the canvas
y	The y coordinate where to place the image on the canvas	
width	Optional. The width of the image to use (stretch or reduce the image)	
height	Optional. The height of the image to use (stretch or reduce the image)


*/


ctx.drawImage(Img.map,30,30,100,100,0,0,  width,height);
}
window.onload = function() {
run();
draw();
}

	 function draw(){
		ctx.save();
       
       
        
        ctx.drawImage(Img.player,0,0,  200,200);
	
		ctx.restore();
	}
