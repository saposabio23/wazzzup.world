window.onload = isItNight();

/* -----------------------------------
IPHONE HEIGHT
// -------------------------------------- */

// function mobileWindow() {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
//   console.log("VH on mobiles", vh);
// }

// window.addEventListener("resize", mobileWindow, false);
// window.addEventListener("orientationchange", mobileWindow, false);


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
      }, 1500);
}


/* -----------------------------------
FEEDBACK MOBILE
-------------------------------------- */
function touch() {
  document.addEventListener("mousemove", event => {
    document.getElementsByClassName("mobile-cursor")[0].style.transform = "translate(" + event.pageX + "px, " + event.pageY + "px)";
  })

  document.addEventListener("click", event => {
    document.getElementsByClassName("mobile-cursor")[0].classList.add("click")
    setTimeout(() => {
      document.getElementsByClassName("mobile-cursor")[0].classList.remove("click")
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
  var $nighScreen = document.getElementById("screen-night");
    var day = new Date();
    var hr = day.getHours();
    if ((hr == 0) || (hr == 1) || (hr == 2) || (hr == 3) || (hr == 4) || (hr == 5) || (hr == 6)){
        document.title = 'Sleeping... 💤';
        $nighScreen.classList.add("itsnight")
        offAtNight()
    }
    if ((hr == 7) || (hr == 8) || (hr == 9) || (hr == 10) || (hr == 11) || (hr == 12) || (hr == 13) || (hr == 14) || (hr == 15) || (hr == 16) || (hr == 17) || (hr == 18) || (hr == 19) || (hr == 20) || (hr == 21) || (hr == 22) || (hr == 23)){
      timer()
      touch()
    }
  }

  function offAtNight() {
    document.querySelector('.screen-home').remove();
    document.querySelector('.screen-projects').remove();
   }

// /* -----------------------------------
// CHECKBOXES
// -------------------------------------- */
   document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('#selectaMode');    
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        console.log('Selecta styla');
        showSelecta();
      } else {
        // do that
        console.log('no selecta babylon');
        showAll();

      }
    });
  });


// /* -----------------------------------
// SHOW SELECTA
// -------------------------------------- */


$selecta = document.querySelectorAll(".selecta");
$project = document.querySelectorAll(".project");
$screenProjects = document.querySelector(".screen-projects");

function showSelecta() {
  for(let i = 0, max = $project.length; i < max; i++)
  if (!$project[i].classList.contains("selecta")){
    $project[i].classList.add("projects-hide");
    $screenProjects.classList.add("selecta-bk");
    
  }
}

function showAll() {
  for(let i = 0, max = $project.length; i < max; i++)
  if ($project[i].classList.contains("projects-hide")){
    $project[i].classList.remove("projects-hide");
    $screenProjects.classList.remove("selecta-bk");
  }
}


  // function showGraphic() {
  //   if ($mgraphic.classList.contains("off")){
  //     var index0 = 0, length = $xgraphic.length;
  //       for ( ; index0 < length; index0++) {
  //             $xgraphic[index0].classList.remove("hide");}
  //     var index1 = 0, length = $xweb.length;
  //       for ( ; index1 < length; index1++) {
  //             $xweb[index1].classList.add("hide");}
  //     var index2 = 0, length = $xstuff.length;
  //       for ( ; index2 < length; index2++) {
  //             $xstuff[index2].classList.add("hide");}
  //     $mgraphic.classList.replace("off", "on");
  //     $mweb.classList.replace("on", "off");
  //     $mstuff.classList.replace("on", "off");
  //   }
  //   else($mgraphic.classList.contains("on")){
  //     var index0 = 0, length = $xgraphic.length;
  //       for ( ; index0 < length; index0++) {
  //             $xgraphic[index0].classList.remove("hide");}
  //     var index1 = 0, length = $xweb.length;
  //       for ( ; index1 < length; index1++) {
  //             $xweb[index1].classList.remove("hide");}
  //     var index2 = 0, length = $xstuff.length;
  //       for ( ; index2 < length; index2++) {
  //             $xstuff[index2].classList.remove("hide");}
  //     $mgraphic.classList.replace("on", "off");
  //     $mweb.classList.replace("on", "off");
  //     $mstuff.classList.replace("on", "off");
  //   }
  // }

