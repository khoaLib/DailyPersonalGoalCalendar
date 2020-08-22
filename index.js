// alert("Hello testing alert");
// document.addEventListener("click", function(){
//   document.get
// })


// function changeMode(){
//   var x = document.
// }


document.querySelector("img").addEventListener("click", function() {});
$(document).ready(function() {
  var flag = false;

  $("img.darkMode").click(function() {
    flag = !flag;
    if (flag) {
      changeLightImage();
      changeBlackBackground()
    } else {
      changeDarkImage();
      changeWhiteBackground()
    }
  })
})

function changeBlackBackground() {
  $("body").addClass("colorWhite");
  $("div.text-box-left").removeClass("colorBorderBlack").addClass("colorBorderWhite");
  $("div.text-box-right").removeClass("colorBorderBlack").addClass("colorBorderWhite");
  $("div.center1").removeClass("colorBorderBlack").addClass("colorBorderWhite");
  $("hr.topHr").removeClass("topHr").addClass("topHrWhite");
  $("div.left-vertical").removeClass("left-vertical").addClass("left-vertical-white");
  $("div.right-vertical").removeClass("right-vertical").addClass("right-vertical-white");
}

function changeWhiteBackground(){
  $("body").removeClass("colorWhite");
  $("div.text-box-left").removeClass("colorBorderWhite").addClass("colorBorderBlack");
  $("div.text-box-right").removeClass("colorBorderWhite").addClass("colorBorderBlack");
  $("div.center1").removeClass("colorBorderWhite").addClass("colorBorderBlack");
  $("hr.topHrWhite").removeClass("topHrWhite").addClass("topHr");
  $("div.left-vertical-white").removeClass("left-vertical-white").addClass("left-vertical");
  $("div.right-vertical-white").removeClass("right-vertical-white").addClass("right-vertical");
}

function changeLightImage() {
  alert("Go dark mode");
  $("img.sunMoon").attr("src", "images\\moonDay.png");
  $("img.darkMode").attr("src", "images\\lightMode.png");
  $("img.symbolDark").attr("src", "images\\symbolDark.png");
  $("img.userDark").attr("src", "images\\download.png");
}

function changeDarkImage() {
  alert("Go Light mode");
  $("img.sunMoon").attr("src", "images\\dayMoon.png");
  $("img.darkMode").attr("src", "images\\darkMode.png");
  $("img.symbolDark").attr("src", "images\\symbolLight.png");
  $("img.userDark").attr("src", "images\\user (2).png");
}
