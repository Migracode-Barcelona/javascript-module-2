/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

function setAlarm() {
    let time = document.querySelector("#alarmSet").value;
    const timeRemaining = document.querySelector("#timeRemaining"); // = Time Remaining: 00:00;
    timeRemaining.textContent = "Time Remaining: 00:" + time;
  
    const intervalId = setInterval(() => {
      time = time - 1;
      timeRemaining.textContent = "Time Remaining: 00:" + time;
  
      if (time === 0) {
        clearInterval(intervalId);
        playAlarm();
      }
    }, 5000);
};

const body = document.querySelector("body");
console.log(body);
body.style.background = "salmon";

setInterval(() => {
  if (body.style.background === "skyblue") {
    body.style.background = "salmon";
  } else {
    body.style.background = "skyblue";
  }
}, 5000);