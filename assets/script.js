/* -----------------------------------
IPHONE HEIGHT
// -------------------------------------- */
window.onload = isItNight();

// function mobileWindow() {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
//   console.log("VH on mobiles", vh);
// }

// window.addEventListener("resize", mobileWindow, false);
// window.addEventListener("orientationchange", mobileWindow, false);

/* -----------------------------------
RANDOM IMAGE
-------------------------------------- */
// var $show = document.getElementById("show");
// var images = ["img/images1.gif","img/images3.webp","img/images4.webp","img/images5.webp","img/images6.webp","img/images7.webp","img/images8.webp","img/images9.webp","img/images10.webp","img/images11.webp","img/images12.webp","img/images14.webp","img/images15.webp","img/images16.webp","img/images18.webp","img/images19.gif"];

// function displayImages(){
//     const random = Math.floor(Math.random() * images.length);
//     $show.setAttribute("src", images[random]);
// }

// $show.addEventListener('click', displayImages);


/* -----------------------------------
LOGO TURN
-------------------------------------- */
// var $pmlogo = document.querySelector('#wip');

// function pmTurn() {
//       $pmlogo.classList.add("pmlogoturn");
//    setTimeout(function(){
//       $pmlogo.classList.remove("pmlogoturn");
//   }, 1000);
// }
// $pmlogo.addEventListener('mouseenter', pmTurn, false);


/* -----------------------------------
MAIL STUFF
-------------------------------------- */
var $mailcopy = document.getElementById("mailcopied");

function copyMail() {
  navigator.clipboard
    .writeText('pablomoreno@proton.me')
    $mailcopy.classList.add("mailappear")
      setTimeout(function(){
        $mailcopy.classList.replace("mailappear", "mailexit")
        setTimeout(function(){
            $mailcopy.classList.replace("mailexit", "mailreset")
        }, 500);
        setTimeout(function(){
            $mailcopy.classList.remove("mailreset")
        }, 1000);
      }, 1500);
}


// /* -----------------------------------
// mouse feedback
// -------------------------------------- */

function touch() {
  document.addEventListener("mousemove", event => {
    document.getElementsByClassName("cursor")[0].style.transform = "translate(" + event.pageX + "px, " + event.pageY + "px)";
  })

  document.addEventListener("click", event => {
    document.getElementsByClassName("cursor")[0].classList.add("click")
    setTimeout(() => {
      document.getElementsByClassName("cursor")[0].classList.remove("click")
    }, 330)
  })
}
// /* -----------------------------------
// TIMER
// -------------------------------------- */
    function timer() {var second = 0;
      function pad ( value ) { return value > 9 ? value : "0" + value; }
      setInterval( function(){
          document.getElementById("seconds").innerHTML=pad(++second%60);
          document.getElementById("minutes").innerHTML=pad(parseInt(second/60,10));
      }, 1000);
    }

// /* -----------------------------------
// SLEEP WEB
// -------------------------------------- */


function isItNight() {
  var $nighScreen = document.getElementById("nightscreen");
    var day = new Date();
    var hr = day.getHours();
    console.log(hr);
    if ((hr == 0) || (hr == 1) || (hr == 2) || (hr == 3) || (hr == 4) || (hr == 5) || (hr == 6)){

    }
    if ((hr == 7) || (hr == 8) || (hr == 9) || (hr == 10) || (hr == 11) || (hr == 12) || (hr == 13) || (hr == 14) || (hr == 15) || (hr == 16) || (hr == 17) || (hr == 18) || (hr == 19) || (hr == 20) || (hr == 21) || (hr == 22) || (hr == 23)){
      $nighScreen.classList.add("night")
      timer()
      touch()
    }
  }