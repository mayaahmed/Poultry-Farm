var canvas = document.getElementById("backCanvas");
var context=canvas.getContext("2d"); 
var keys =[];



var player ={
x: 220,
y: 10 , 
width: 200, 
height:300,
spriteAnimCounter: 0, 
opacity: 0.8
};

var hide ={
x: -5,
y: 10 , 
width: 263, 
height: 300,

opacity: 0.8
};


var chickenFry ={
x: 200,
y: 240 , 
width: 50, 
height: 50,

opacity: 0.8
};




var scene ={
x: 50,
y: 10, 
width: 380,
height: 300

};



var Img= {};
Img.player = new Image();
Img.player.src="praying.jpg"; 
Img.chickenFry = new Image();
Img.chickenFry.src="chickenFry.jpg"; 
Img.scene = new Image();
Img.scene.src="back.jpg";
Img.hide = new Image();
Img.hide.src="hide.jpg";
var width=canvas.width, height=canvas.height, speed=3;


window.addEventListener("keydown", function(e){
keys[e.keyCode]=true;
},false);

window.addEventListener("keyup", function(e){

delete keys[e.keyCode];
},false);






/* up=38, down=40, left=37, right=39 */

function game(){
update();
render();
}

/*
function update(){
if(keys[38]) player.y-=speed;
if(keys[40]) player.y+=speed;
if(keys[37]) player.x-=speed;
if(keys[39]) player.x+=speed;
if(player.x<0) player.x=0;
if(player.y<0) player.y=0;
if(player.x > width-player.width) player.x=width-player.width;
if(player.y> height-player.height) player.y=height -player.height;
}
 context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);

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


function update(){
// player.x+=speed;
player.spriteAnimCounter+=0.2;

}

function render(){
context.clearRect(0,0,width,height);

 context.drawImage(Img.scene,10,10,Img.scene.width, Img.scene.height,scene.x,scene.y, scene.width,scene.height);
var walkMod = Math.floor(player.spriteAnimCounter) % 2;




var spriteWidth = Img.player.width/2;
 var spriteHeight = Img.player.height;

context.drawImage(Img.player, walkMod*spriteWidth ,0, spriteWidth, spriteHeight,  player.x, player.y, player.width, player.height);



var hideWidth = Img.hide.width/2;
 var hideHeight = Img.hide.height;

context.drawImage(Img.hide, walkMod*hideWidth ,0, hideWidth, hideHeight,  hide.x, hide.y, hide.width,
 hide.height);


var chickenSpriteWidth = Img.chickenFry.width/2;
 var chickenSpriteHeight = Img.chickenFry.height;

context.drawImage(Img.chickenFry, walkMod*chickenSpriteWidth ,0, chickenSpriteWidth, chickenSpriteHeight,  chickenFry.x, chickenFry.y, chickenFry.width, chickenFry.height);



}



window.onload = function() {
render();
}



setInterval(function(){
window.onload = function() {
game(); }
},1000/30);
