/* -----------------------------------
IPHONE HEIGHT
// -------------------------------------- */
// window.onload = isItNight();

// /* -----------------------------------
// SLEEP WEB
// -------------------------------------- */

var $div = document.querySelector('#nightscreen');
var $icons = document.querySelector('#sleep-icons');
var $text = document.querySelector('#sleep-text');

function showText() {
      $text.classList.remove("hideText");
      $icons.classList.add("hideText");
}
$div.addEventListener('mouseenter', showText, false);

function hideText() {
  $text.classList.add("hideText");
  $icons.classList.remove("hideText");
}
$div.addEventListener('mouseleave', hideText, false);
