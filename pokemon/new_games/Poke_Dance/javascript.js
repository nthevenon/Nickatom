$(document).ready(function() {

var img = new Image();
var rand = Math.floor(Math.random()*11);
if (rand == 0) {
	img.src = "https://www.w3schools.com/css/trolltunga.jpg";
}
else if(rand == 1) {
img.src = "https://www.w3schools.com/css/trolltunga.jpg";
}
else if(rand == 2) {
img.src = "https://www.w3schools.com/css/trolltunga.jpg";
}
else if(rand == 3) {
img.src = "https://www.w3schools.com/css/trolltunga.jpg";
}
else if(rand == 4) {
img.src = "https://www.w3schools.com/css/trolltunga.jpg";
}
else if(rand == 5) {
img.src = "https://www.w3schools.com/css/trolltunga.jpg";
}
else if(rand == 6) {
img.src = "https://www.w3schools.com/css/trolltunga.jpg";
}
else if(rand == 7) {
img.src = "https://www.w3schools.com/css/trolltunga.jpg";
}
else if(rand == 8) {
img.src = "https://www.w3schools.com/css/trolltunga.jpg";
}
else if(rand == 9) {
img.src = "https://www.w3schools.com/css/trolltunga.jpg";
}
else if(rand == 10) {
img.src = "https://www.w3schools.com/css/trolltunga.jpg";
}
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
rand=Math.floor(Math.random()*11);
console.log(img.src);
if(rand == 0) {
	ctx.drawImage(img,1,2,100,100);
}
else if (rand == 1) {
	ctx.drawImage(img,1,2,100,100);
}
else if (rand == 2) {
	ctx.drawImage(img,1,2,100,100);
}
else if (rand == 3) {
	ctx.drawImage(img,1,2,100,100);
}
else if (rand == 4) {
	ctx.drawImage(img,1,2,100,100);
}
else if (rand == 5) {
	ctx.drawImage(img,1,2,100,100);
}
else if (rand == 6) {
	ctx.drawImage(img,1,2,100,100);
}
else if (rand == 7) {
	ctx.drawImage(img,1,2,100,100);
}
else if (rand == 8) {
	ctx.drawImage(img,1,2,100,100);
}
else if (rand == 9) {
	ctx.drawImage(img,1,2,100,100);
}
else if (rand == 10) {
	ctx.drawImage(img,1,2,100,100);
}
});