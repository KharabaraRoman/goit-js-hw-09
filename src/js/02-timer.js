import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

   const datetimePicker = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("#start-btn");
const daysValue = document.querySelector("[data-days]");
const hoursValue = document.querySelector("[data-hours]");
const minutesValue = document.querySelector("[data-minutes]");
const secondsValue = document.querySelector("[data-seconds]");

let countdownInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const now = new Date();
    if (selectedDate < now) {
      window.alert("Please choose a date in the future");
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr(datetimePicker, options);

startBtn.addEventListener("click", () => {
  const selectedDate = new Date(datetimePicker.value);
  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    const now = new Date();
    const timeDifference = selectedDate - now;

    if (timeDifference < 0) {
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference / (1000 * 60 * 60)) % 24
    );
    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    daysValue.textContent = days.toString().padStart(2, "0");
    hoursValue.textContent = hours.toString().padStart(2, "0");
    minutesValue.textContent = minutes.toString().padStart(2, "0");
    secondsValue.textContent = seconds.toString().padStart(2, "0");
  }, 1000);
});