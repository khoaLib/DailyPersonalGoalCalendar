// alert("Hello testing alert");
// document.addEventListener("click", function(){
//   document.get
// })


// function changeMode(){
//   var x = document.
// }


document.querySelector("img").addEventListener("click", function() {
  alert("first Image got clicked")
});
$(document).ready(function() {
  var flag = false;

  $("img.darkMode").click(function() {
    flag = !flag;
    if (flag) {
      changeLightImage();
    } else {
      changeDarkImage();
    }
  })
})

function changeLightImage() {
  alert("Go dark mode");
  $("img.sunMoon").attr("src", "images\\whiteSunMoon.png");
  $("img.darkMode").attr("src", "images\\lightMode.png");
  $("img.symbolDark").attr("src", "images\\symBolLight.png");
  $("img.userDark").attr("src", "images\\user.png");
}

function changeDarkImage() {
  alert("Go Light mode");
  $("img.sunMoon").attr("src", "images\\day-and-night.png");
  $("img.darkMode").attr("src", "images\\darkMode.png");
  $("img.symbolDark").attr("src", "images\\symbolDark.png");
  $("img.userDark").attr("src", "images\\user(1).png");
}
