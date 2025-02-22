let secretNumber = Math.floor(Math.random() * 10) + 1;
let attemptsLeft = 3;
let bestScore = localStorage.getItem("bestScore") || "-";

document.getElementById("best-score").textContent = bestScore;

function checkGuess() {
  let guess = Number(document.getElementById("guess-input").value);
  let message = document.getElementById("message");

  if (!guess || guess < 1 || guess > 10) {
    message.textContent = "⛔ Enter a number between 1 and 100!";
    message.style.color = "orange";
    return;
  }

  attemptsLeft--;
  document.getElementById("attempts").textContent = attemptsLeft;

  if (guess === secretNumber) {
    message.textContent = "🎉 Correct! You win!";
    message.style.color = "#d4af37";
    message.style.textShadow = "0 0 10px #d4af37";
    updateBestScore();
    disableInput();
  } else if (guess > secretNumber) {
    message.textContent = "📉 Too high!";
    message.style.color = "#ff6347";
    message.style.textShadow = "0 0 10px #ff6347";
  } else {
    message.textContent = "📈 Too low!";
    message.style.color = "#1e90ff";
    message.style.textShadow = "0 0 10px #1e90ff";
  }

  if (attemptsLeft === 0 && guess !== secretNumber) {
    message.textContent = `💀 Game Over! The number was ${secretNumber}.`;
    message.style.color = "#ff4500";
    disableInput();
  }
}

function updateBestScore() {
  let currentScore = 10 - attemptsLeft;
  if (bestScore === "-" || currentScore < bestScore) {
    localStorage.setItem("bestScore", currentScore);
    document.getElementById("best-score").textContent = currentScore;
  }
}

function disableInput() {
  document.getElementById("guess-input").disabled = true;
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
  attemptsLeft = 3;
  document.getElementById("attempts").textContent = attemptsLeft;
  document.getElementById("guess-input").value = "";
  document.getElementById("guess-input").disabled = false;
  document.getElementById("message").textContent = "";
}
