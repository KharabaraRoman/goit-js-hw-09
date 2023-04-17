const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId = null;

function setRandomBodyBgColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function startChangingBgColor() {
  startBtn.disabled = true;
  intervalId = setInterval(setRandomBodyBgColor, 1000);
}

function stopChangingBgColor() {
  startBtn.disabled = false;
  clearInterval(intervalId);
}

startBtn.addEventListener('click', startChangingBgColor);
stopBtn.addEventListener('click', stopChangingBgColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
