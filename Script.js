let multiplier = 1.00;
let gameInterval;
let inGame = false;

const multiplierDisplay = document.getElementById("multiplier");
const betBtn = document.getElementById("betBtn");
const cashoutBtn = document.getElementById("cashoutBtn");
const status = document.getElementById("status");

betBtn.addEventListener("click", startGame);
cashoutBtn.addEventListener("click", cashOut);

function startGame() {
  if (inGame) return;
  inGame = true;
  multiplier = 1.00;
  status.innerText = "🚀 Game started...";
  betBtn.disabled = true;
  cashoutBtn.disabled = false;

  gameInterval = setInterval(() => {
    multiplier += 0.05;
    multiplierDisplay.innerText = multiplier.toFixed(2) + "x";

    // Random crash condition
    if (Math.random() < 0.01 * multiplier) {
      clearInterval(gameInterval);
      status.innerText = "💥 Plane crashed at " + multiplier.toFixed(2) + "x!";
      betBtn.disabled = false;
      cashoutBtn.disabled = true;
      inGame = false;
    }
  }, 200);
}

function cashOut() {
  clearInterval(gameInterval);
  status.innerText = "✅ You cashed out at " + multiplier.toFixed(2) + "x!";
  betBtn.disabled = false;
  cashoutBtn.disabled = true;
  inGame = false;
                             }
