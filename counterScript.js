

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

  function handleIncrement(e) {
    e.preventDefault();
      if (!isCountingDown) {
          count++;
          countElement.textContent = count;
          updateLocalStorage();

          if (count % 317 === 0) {
              startCountdown();
          }

          if (count >= 2000) {
            let stage = document.getElementById("stage");
            stage.textContent = "Adolescent";
              }
              if (count >= 9000) {
                stage.textContent = "Adult";
              }
              if (count >= 28000) {
                stage.textContent = "Elder";
              }
              if (count >= 65000) {
                stage.textContent = "Granny";
              }
              if (count >= 100000) {
                stage.textContent = "Ancestor";
              }
              if (count >= 150000) {
                stage.textContent = "LORD";
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







// ----Friends----

const btn = document.querySelector(".btn")
const coupon = document.querySelector(".coupon")


const copyText = (e) => {
 e.preventDefault();

 coupon.select();
 coupon.setSelectionRange(0, 9999);


  document.execCommand("copy");

  btn.textContent = "Copied..!"
  setTimeout(() => {
    btn.textContent = "Copy"
  }, 3000) 


const addreward = () => {
  coupon.addEventListener("click") = function() {
    function updateLocalStorage() {
      localStorage.setItem("count", count);
      countElement + 200;
  }
  }

}
}



btn.addEventListener("click", copyText);

