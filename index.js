// receive event, check for valid input, color the time log based on input
// event
function getInfor() {
  var name = prompt("What is your event's title?");
  var startTime = prompt("Please enter event's start time as the form hh:mmpm OR hh:mmam");
  validateTime(startTime);
  var endTime = prompt("Please enter event's end time as the form hh:mmpm OR hh:mmam");
  validateTime(endTime);
  colorTimeLog(startTime, endTime);
}

//Get the start time and endtime to know which log need to be be colored
function colorTimeLog(begin, end) {
  //work with startTime
  var hour = parseInt(begin.slice(0, 3));
  var minute = parseInt(begin.slice(3, 5));
  var dn = begin.slice(5, begin.length);
  var dayOrNight = dn.toLowerCase();

  //work with endTime
  var hour2 = parseInt(end.slice(0, 3));
  var minute2 = parseInt(end.slice(3, 5));
  var dn2 = end.slice(5, end.length);
  var dayOrNight2 = dn2.toLowerCase();

  var startLog = decideTime(hour, dayOrNight);
  var endLog = decideTime(hour2, dayOrNight2);
  alert("startTime: " + startLog + ", And endTime: " + endLog);
  fillColorLog(startLog, endLog);
}

//do the color with loop
function fillColorLog(begin, end) {
  var i;
  for (i = begin; i <= end; i++) {
    $("div.event")[i].classList.add("lf");
  }
}

// receive hour and pm/am
//decide the start and end log need to be colored
function decideTime(hour, dayOrNight) {
  var startLog;
  if (dayOrNight === "am") {
    switch (hour) {
      case 5:
        startLog = 0;
        break;
      case 6:
        startLog = 1;
        break;
      case 7:
        startLog = 2;
        break;
      case 8:
        startLog = 3;
        break;
      case 9:
        startLog = 4;
        break;
      case 10:
        startLog = 5;
        break;
      case 11:
        startLog = 6;
        break;
      default:
        console.log("write time!");
    }
  } else {
    switch (hour) {
      case 12:
        startLog = 7;
        break;
      case 1:
        startLog = 8;
        break;
      case 2:
        startLog = 9;
        break;
      case 3:
        startLog = 10;
        break;
      case 4:
        startLog = 11;
        break;
      case 5:
        startLog = 12;
        break;
      case 6:
        startLog = 13;
        break;
      case 7:
        startLog = 14;
        break;
      case 8:
        startLog = 15;
        break;
      case 9:
        startLog = 16;
        break;
      case 10:
        startLog = 17;
        break;
      default:
        console.log("write time!");
    }
  }
  return startLog;
}


// Check if the input time is valid
//will ask user to enter again if the time inout is wrong or not in time log
function validateTime(input) {
  var flag = false;
  if (input != null) {
    var time = input.replace(/ /g, "");
  }
  var hour = time.slice(0, 3);
  var minute = time.slice(3, 5);
  var dn = time.slice(5, time.length);
  var dayOrNight = dn.toLowerCase();
  // alert("hour: " + hour + " minute: " + minute + " dayOrNight: " + dayOrNight);

  while (!flag) {
    hour = parseInt(hour);
    minute = parseInt(minute);
    if (Number.isInteger(hour) && Number.isInteger(minute)) {
      if (hour >= 1 && hour <= 12 && minute >= 0 && minute <= 60) {
        if ((dayOrNight === "pm" && hour <= 12 && hour != 11) || (dayOrNight === "am" && hour < 12 && hour > 4)) {
          flag = true;
        }
      }
    }

    if (!flag) {
      time = prompt("Please enter time again as the form hh:mmpm/hh:mmam");
      if (time != null) {
        time = time.replace(/ /g, "");
      }
      hour = time.slice(0, 3);
      minute = time.slice(4, 6);
      dn = time.slice(6, time.length);
      dayOrNight = dn.toLowerCase();
    }
  }
  return flag;
}







// Implementing darkmode
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

function changeWhiteBackground() {
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
  $("img.darkMode").attr("src", "images\\lightButton.png");
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
