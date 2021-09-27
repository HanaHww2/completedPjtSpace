const clock = document.querySelector("div#clock");

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");

  clock.innerText = `${hour}:${minute}:${second}`;
}
// setAnimationFrame
getClock(); // 최초 바로 실행
setInterval(getClock, 1000);
