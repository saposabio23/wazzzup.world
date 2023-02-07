// window.onload = isItNight()

/* -----------------------------------
CSS COLOOOORS
// -------------------------------------- */
function witchColor() {
  var randomColor = [ 'Aqua', 'Aquamarine', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'Darkorange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue', 'FireBrick', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'Gold', 'GoldenRod', 'Gray', 'Grey', 'Green', 'GreenYellow', 'HotPink', 'IndianRed', 'Indigo', 'Khaki', 'Lavender', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'Lime', 'LimeGreen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'Yellow', 'YellowGreen'][Math.floor(Math.random() * 127)]


  console.log(randomColor);
  var newColor=":root{--thisColor: " + randomColor + ";}"

  var styleSheet = document.createElement("style")
  styleSheet.innerText = newColor
  document.head.appendChild(styleSheet)
}

// witchColor()

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
    }
  }

  function offAtNight() {
    document.querySelector('.screen-home').remove();
    document.querySelector('.screen-projects').remove();
   }


// // /* -----------------------------------
// // SHOW SELECTA
// // -------------------------------------- */
// document.addEventListener('DOMContentLoaded', function () {
//   var checkbox = document.querySelector('#selectaMode');    
//     checkbox.addEventListener('change', function () {
//       if (checkbox.checked) {
//         console.log('Selecta styla');
//         showSelecta();
//       } else {
//         // do that
//         console.log('no selecta babylon');
//         showAll();

//       }
//     });
//   });

// $selecta = document.querySelectorAll(".selecta");
// $projectThumb = document.querySelectorAll(".projectThumb");
// $screenProjects = document.querySelector(".screen-projects");
// $projectsControls = document.querySelector(".controls");

// function showSelecta() {
//   for(let i = 0, max = $projectThumb.length; i < max; i++)
//   if (!$projectThumb[i].classList.contains("selecta")){
//     $projectThumb[i].classList.add("projects-hide");
    
//   }
// }

// function showAll() {
//   for(let i = 0, max = $projectThumb.length; i < max; i++)
//   if ($projectThumb[i].classList.contains("projects-hide")){
//     $projectThumb[i].classList.remove("projects-hide");
//     $screenProjects.classList.remove("selecta-bk");
//   }
// }




// // /* -----------------------------------
// // FILTER SELECTOR
// // -------------------------------------- */
// $buttonWeb = document.getElementById("buttonWeb");
// $buttonThreed = document.getElementById("buttonThreed");
// $buttonPrint = document.getElementById("buttonPrint");
// $buttonStuff = document.getElementById("buttonStuff");

// $projectsWeb = document.querySelectorAll(".web");
// $projectsThreed = document.querySelectorAll(".threed");
// $projectsPrint = document.querySelectorAll(".print");
// $projectsStuff = document.querySelectorAll(".stuff");

// function highlightWeb() {
//   for(let i = 0, max = $projectsWeb.length; i < max; i++){
//     $projectsWeb[i].classList.toggle("highlightWeb");
//     $buttonWeb.classList.toggle("highlightWeb");
//   }
// }
// $buttonWeb.addEventListener('click', highlightWeb);

// function highlightThreed() {
//   for(let i = 0, max = $projectsThreed.length; i < max; i++){
//     $projectsThreed[i].classList.toggle("highlightThreed");
//     $buttonThreed.classList.toggle("highlightThreed");
//   }
// }
// $buttonThreed.addEventListener('click', highlightThreed);

// function highlightStuff() {
//   for(let i = 0, max = $projectsStuff.length; i < max; i++){
//     $projectsStuff[i].classList.toggle("highlightStuff");
//     $buttonStuff.classList.toggle("highlightStuff");
//   }
// }
// $buttonStuff.addEventListener('click', highlightStuff);


// function highlightPrint() {
//   for(let i = 0, max = $projectsPrint.length; i < max; i++){
//     $projectsPrint[i].classList.toggle("highlightPrint");
//     $buttonPrint.classList.toggle("highlightPrint");
//   }
// }
// $buttonPrint.addEventListener('click', highlightPrint);
