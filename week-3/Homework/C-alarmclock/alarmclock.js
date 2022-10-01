
const formatTime = (time) => {

  if (time != 60) {
    let minutes = Math.ceil(time / 60) - 1
    if (minutes >= 1) {
      let seconds = time - minutes * 60
      munites = `0${minutes}`
      time = `${minutes}:${seconds}`
    } else {
      if (time < 10) {
        time = `00:0${time}`
      } else {
        time = `00:${time}`
      }
    }
  } else {
    time = `00:${time}`
  }

  return time
}


const setAlarm = () => {
  let time = document.querySelector("#alarmSet").value
  const timeRemaining = document.querySelector("#timeRemaining")
  timeRemaining.innerHTML = `Time Remaining: ${formatTime(time)}`
  const setIntervalId = setInterval(() => {
    if (time <= 0) {
      playAlarm()
      clearInterval(setIntervalId)
    } else {
      time = time - 1
      timeRemaining.innerHTML = `Time Remaining: ${formatTime(time)}`
    }

  }, 1000)
}



// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
