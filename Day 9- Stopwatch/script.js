let [sec, min, hr] = [0, 0, 0];
const time = document.querySelector("#time");
const start = document.querySelector("#start");
let timer = null;

function stopWatch() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
    if (min == 60) {
      min = 0;
      hr++;
    }
  }
  let h = hr < 10 ? "0" + hr : hr;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;

  time.innerHTML = `${h}:${m}:${s}`;
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  start.onclick = null;
  timer = setInterval(stopWatch, 1000);
}
function watchStop() {
  clearInterval(timer);
}
function watchReset() {
  clearInterval(timer);
  [sec, min, hr] = [0, 0, 0];
  time.innerHTML = `${hr}0:${min}0:${sec}0`;
}
