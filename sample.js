
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.createElement("img");
img.onload = () => {
   ctx.drawImage(img, 0, 0,500,500);
};
img.src = 'idle.png';

