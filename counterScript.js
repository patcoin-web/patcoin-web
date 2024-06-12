const countElement = document.getElementById("count");
const levelElement = document.getElementById("level");
const timerElement = document.getElementById("timer");
const increaseButton = document.getElementById("increase");

let count = parseInt(localStorage.getItem("count")) || 0;
let level = "Amature";

updateCount();

increaseButton.addEventListener("click", handleIncrement);

function handleIncrement() {
  count++;
  updateCount();
  localStorage.setItem("count", count);
  if (count >= 1000) {
    startCountdown(10);
  }
  if (count >= 200) {
    levelElement.textContent = "Adolescent";
  }
  if (count >= 230) {
    levelElement.textContent = "Adult";
  }
  if (count >= 250) {
    levelElement.textContent = "Elder";
  }
}

function updateCount() {
  countElement.textContent = count;
}

function startCountdown(countdownValue) {
  let countdown = countdownValue;
  let interval = setInterval(() => {
    timerElement.textContent = `${countdown}s`;
    countdown--;
    if (countdown === 0) {
      clearInterval(interval);
      timerElement.textContent = "Mine Now!";
    }
  }, 1000);
}
