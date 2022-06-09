window.onload = mobileWindow();

function mobileWindow() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  console.log("VH on mobiles", vh);
}

window.addEventListener("resize", mobileWindow, false);
window.addEventListener("orientationchange", mobileWindow, false);



var $show = document.getElementById("show");
var images = ["img/images1.gif","img/images3.webp","img/images4.webp","img/images5.webp","img/images6.webp","img/images7.webp","img/images8.webp","img/images9.webp","img/images10.webp","img/images11.webp","img/images12.webp","img/images14.webp","img/images15.webp","img/images16.webp","img/images18.webp","img/images19.gif"];

function displayImages(){
    const random = Math.floor(Math.random() * images.length);
    $show.setAttribute("src", images[random]);
}

$show.addEventListener('click', displayImages);



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
