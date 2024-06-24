document.addEventListener("DOMContentLoaded", () => {
  const gainElement = document.getElementById("gain");
  const levelElement = document.getElementById("level");
  const increaseButton = document.getElementById("task");
  let stage = document.getElementById("stage");

  let gain = parseInt(localStorage.getItem("gain")) || 0;
  let level = "Now!";
  let isCountingDown = false;
  let countdownValue = 30;

  gainElement.textContent = gain;

  function updateLocalStorage() {
      localStorage.setItem("gain", gain);
  }

  function handleIncrement() {
      if (!isCountingDown) {
          gain++;
          gainElement.textContent = gain;
          updateLocalStorage();

          if (gain % 1000 === 0) {
              startCountdown();
          }

          // if (count >= 1000000) {
          //   let stage = document.getElementById("stage");
          //   stage.textContent = "Adolescent";
          //     }
          //     if (count >= 3000000) {
          //       stage.textContent = "Adult";
          //     }
          //     if (count >= 8000000) {
          //       stage.textContent = "Elder";
          //     }
          //     if (count >= 15000000) {
          //       stage.textContent = "Ancestor";
          //     }
      }

      
  }

  function startCountdown() {
      isCountingDown = true;
      let interval = setInterval(() => {
          levelElement.textContent = countdownValue;
          countdownValue--;

          if (countdownValue < 0) {
              clearInterval(interval);
              isCountingDown = false;
              levelElement.textContent = level;
              countdownValue = 30;
          }
      }, 1000);
  }

  increaseButton.addEventListener("click", handleIncrement);
});

