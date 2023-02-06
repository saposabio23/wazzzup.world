console.log("horizon-script loaded");

var $SUN = document.querySelector('#sun');
var $SKY= document.querySelector('#sky');


//SUN DOWNING ON SCROLL
function moveSun() {
  var style = getComputedStyle($SUN)
  var top = parseInt(style.top)
  $SUN.style.top = (top + 100) + "px"
}

document.addEventListener("scroll", moveSun);


//SKY DARKING ON SCROLL
var lum = 50;

var coul = 240;

function changeSky() {
  lum--;
  coul++;
  $SKY.style.background = "linear-gradient(hsl(240, 100%, 0%) 0%, hsl(" + coul + ", 100%, " + lum  + "%) 100%)";
  var styleSky = $SKY.style.background
  console.log("hsl", styleSky);
}

document.addEventListener("scroll", changeSky);
