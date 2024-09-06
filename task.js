

//SET REWARD  FUNCTIONALITIES

const rewardAlert = document.querySelector(".reward");

const claimBtn1 = document.querySelector(".btn1");
const TaskOne = document.querySelector(".name1");
const amount1 = document.querySelector(".amount1");

TaskOne.addEventListener("click", claimReward1);
function claimReward1() {
    amount1.style.display = "none";
    claimBtn1.style.display = "block";

    claimBtn1.addEventListener("click", notifyReward1);
    function notifyReward1() {
        rewardAlert.style.display = "block";
        claimBtn1.style.opacity = 0.3
        claimBtn1.textContent = "Claimed.!"
    }
}



const rewardAlert2 = document.querySelector(".reward2");

const claimBtn2 = document.querySelector(".btn2");
const TaskTwo = document.querySelector(".name2");
const amount2 = document.querySelector(".amount2");

const name2 = document.querySelector(".name2");

name2.addEventListener("click", claimReward2);
function claimReward2() {
    
    setTimeout(() => {
        amount2.style.display = "none";
        claimBtn2.style.display = "block";
    }, "3000")
    
    

    claimBtn2.addEventListener("click", notifyReward2);
    function notifyReward2() {
        setTimeout(() => {
            claimBtn2.textContent = "Claimed.!"
            rewardAlert.style.display = "block";
            
            setTimeout(() => {
                rewardAlert.style.opacity = "0.8";
            }, "2700")

            setTimeout(() => {
                rewardAlert.style.opacity = "0.5";
            }, "2800")

            setTimeout(() => {
                rewardAlert.style.opacity = "0.3";
            }, "2900")

            setTimeout(() => {
                rewardAlert.style.opacity = "0.1";
            }, "3000")

            setTimeout(() => {
                rewardAlert.style.opacity = "0";
            }, "3100")

        }, "1000")

        claimBtn2.removeEventListener("click", notifyReward2);
    }
    
}


const rewardAlert3 = document.querySelector(".reward");

const claimBtn3 = document.querySelector(".btn3");
const TaskThree = document.querySelector(".name3");
const amount3 = document.querySelector(".amount3");

const name3 = document.querySelector(".name3");

function claimReward3() {
    amount3.style.display = "none";
    claimBtn3.style.display = "block";
    
 
    claimBtn3.addEventListener("click", notifyReward3);
    function notifyReward3() {
        claimBtn3.textContent = "Claimed.!"
        rewardAlert.style.display = "block"
    }
}

