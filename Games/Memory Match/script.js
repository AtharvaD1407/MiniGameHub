const emojis = ["🍕", "🎉", "🚀", "🐶", "🌟", "🎸", "🎮", "🎈"];
let cards = [...emojis, ...emojis]; // Duplicate to create pairs
cards.sort(() => Math.random() - 0.5); // Shuffle cards

const grid = document.querySelector(".grid");
let firstCard, secondCard;
let lockBoard = false;
let moves = 0;
let matchedPairs = 0;
let time = 0;
let timerInterval;

document.getElementById("moves").innerText = moves;

// Create card elements
cards.forEach((emoji) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.emoji = emoji;
  card.innerText = "❓";
  card.addEventListener("click", flipCard);
  grid.appendChild(card);
});

// Flip card function
function flipCard() {
  if (lockBoard || this === firstCard) return;

  this.classList.add("flipped");
  this.innerText = this.dataset.emoji;

  if (!firstCard) {
    firstCard = this;
  } else {
    secondCard = this;
    checkMatch();
  }

  if (moves === 0) startTimer();
}

// Check if cards match
function checkMatch() {
  moves++;
  document.getElementById("moves").innerText = moves;

  if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    matchedPairs++;

    if (matchedPairs === emojis.length) {
      setTimeout(
        () => alert(`🎉 You won in ${moves} moves and ${time} seconds!`),
        500
      );
      clearInterval(timerInterval);
    }

    resetCards();
  } else {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      firstCard.innerText = "❓";
      secondCard.innerText = "❓";
      resetCards();
    }, 1000);
  }
}

// Reset flipped cards
function resetCards() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

// Start Timer
function startTimer() {
  time = 0;
  document.getElementById("timer").innerText = time;
  timerInterval = setInterval(() => {
    time++;
    document.getElementById("timer").innerText = time;
  }, 1000);
}

// Restart Game
document.getElementById("restart").addEventListener("click", () => {
  location.reload();
});
