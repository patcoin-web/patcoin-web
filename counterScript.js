

document.addEventListener("DOMContentLoaded", () => {
  const countElement = document.getElementById("count");
  const levelElement = document.getElementById("level");
  const increaseButton = document.getElementById("increase");
  let stage = document.getElementById("stage");

  let count = parseInt(localStorage.getItem("count")) || 0;
  let level = "Now!";
  let isCountingDown = false;
  let countdownValue = 30;

  countElement.textContent = count;

  function updateLocalStorage() {
      localStorage.setItem("count", count);
  }

  function handleIncrement() {
      if (!isCountingDown) {
          count++;
          countElement.textContent = count;
          updateLocalStorage();

          if (count % 1000 === 0) {
              startCountdown();
          }


          if (count >= 1000000) {
            let stage = document.getElementById("stage");
            stage.textContent = "Adolescent";
              }
              if (count >= 3000000) {
                stage.textContent = "Adult";
              }
              if (count >= 8000000) {
                stage.textContent = "Elder";
              }
              if (count >= 15000000) {
                stage.textContent = "Ancestor";
              }


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
