

const countElement = document.getElementById("count");
const levelElement = document.getElementById("stage");
const increaseButton = document.getElementById("increase");

let count = parseInt(localStorage.getItem("count")) || 0;
let level = "Kid";
let countdownActive = false;

updateCount();

increaseButton.addEventListener("click", handleIncrement);

function handleIncrement() {
  count++;
  updateCount();
  localStorage.setItem("count", count);
  if (count === 10 && !countdownActive) {
    startCountdown(10);
    countdownActive = true;
    increaseButton.removeEventListener("click", handleIncrement);
  } else if (count > 10 && countdownActive) {
    return;
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
  if (count >= 400) {
    levelElement.textContent = "Ancestor";
  }
}

function updateCount() {
  countElement.textContent = count;
}

function startCountdown(countdownValue) {
  let countdown = countdownValue;
  let interval = setInterval(() => {
    levelElement.textContent = `${countdown}s`;
    countdown--;
    if (countdown === 0) {
      clearInterval(interval);
      levelElement.textContent = "Kid";
      countdownActive = false;
      increaseButton.addEventListener("click", handleIncrement);
    }
  }, 1000);
}


















// const countElement = document.getElementById("count");
// const levelElement = document.getElementById("stage");
// const timerElement = document.getElementById("timer");
// const increaseButton = document.getElementById("increase");

// let count = parseInt(localStorage.getItem("count")) || 0;
// let level = "Amature";
// let countdownActive = false;

// updateCount();

// increaseButton.addEventListener("click", handleIncrement);

// function handleIncrement() {
//   count++;
//   updateCount();
//   localStorage.setItem("count", count);
//   if (count === 10 && !countdownActive) {
//     startCountdown(10);
//     countdownActive = true;
//     increaseButton.removeEventListener("click", handleIncrement);
//   } else if (count > 1000 && countdownActive) {
//     return;
//   }
//   if (count >= 200) {
//     levelElement.textContent = "Adolescent";
//   }
//   if (count >= 230) {
//     levelElement.textContent = "Adult";
//   }
//   if (count >= 250) {
//     levelElement.textContent = "Elder";
//   }
//   if (count >= 400) {
//     levelElement.textContent = "Ancestor";
//   }
// }

// function updateCount() {
//   countElement.textContent = count;
// }

// function startCountdown(countdownValue) {
//   let countdown = countdownValue;
//   let interval = setInterval(() => {
//     timerElement.textContent = `${countdown}s`;
//     countdown--;
//     if (countdown === 0) {
//       clearInterval(interval);
//       timerElement.textContent = "Mine Now!";
//       countdownActive = false;
//       increaseButton.addEventListener("click", handleIncrement);
//     }
//   }, 1000);
// }

