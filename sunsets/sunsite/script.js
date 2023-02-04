console.log("daynnight");

var $BLOCK = document.querySelector(".block");
var $BLOCKBACK = document.querySelector(".blockback");


function changeSkyBack() {
  // cette fonction vient placer le "frame" précédent en "z-index=-1" pour qu'il n'y a pas de saut quand l'image change.
  var date = new Date();
  var minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : '' + date.getMinutes();
  var seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : '' + date.getSeconds() - 1;
  // problème ici, arrivé à "00 secondes" il ne peut soustraire à "-1", mais surtout il devrait soustraire à "59" (60-1).
  // puis à "10 secondes -1" il affiche "9" au lieu de "09"
  var time = minutes + seconds;

  $BLOCKBACK.style.backgroundImage = "url(\"images/" + time + ".png\")";

  console.log("---", time);
}

function changeSky() {
  var date = new Date();
  var minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : '' + date.getMinutes();
  var seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : '' + date.getSeconds();
  var time = minutes + seconds;

  $BLOCK.style.backgroundImage = "url(\"images/" + time + ".png\")";

  console.log(time);
}


setInterval(function () {
    changeSkyBack()
    changeSky()
}, 1000)
