var $sky= document.querySelector('#sky');
var $sun= document.querySelector('#sun');
var $sea= document.querySelector('#sea');

function createSunset() {
  function random(number) {
    return Math.floor(Math.random()*number);
  }
  function randColor() {
    return 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  }
  $sky.style.backgroundColor = randColor();
  $sun.style.backgroundColor = randColor();
  $sea.style.backgroundColor = randColor();
}

window.addEventListener('keyup', createSunset);

