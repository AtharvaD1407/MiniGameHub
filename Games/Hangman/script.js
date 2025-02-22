const words = [
  "javascript",
  "programming",
  "hangman",
  "developer",
  "web",
  "coding",
];
let selectedWord = "";
let guessedLetters = [];
let incorrectGuesses = [];
let attemptsRemaining = 6;

const wordDisplay = document.getElementById("word-display");
const letterInput = document.getElementById("letter-input");
const attemptsElement = document.getElementById("attempts");
const incorrectGuessesElement = document.getElementById("incorrect-guesses");
const messageElement = document.getElementById("message");
const hangmanElement = document.getElementById("hangman");

function startGame() {
  selectedWord = words[Math.floor(Math.random() * words.length)];
  guessedLetters = [];
  incorrectGuesses = [];
  attemptsRemaining = 6;
  updateUI();
}

function guessLetter() {
  const letter = letterInput.value.toLowerCase();
  if (
    letter &&
    !guessedLetters.includes(letter) &&
    !incorrectGuesses.includes(letter)
  ) {
    guessedLetters.push(letter);

    if (selectedWord.includes(letter)) {
      messageElement.textContent = "Good guess!";
      messageElement.style.color = "green";
    } else {
      incorrectGuesses.push(letter);
      attemptsRemaining--;
      messageElement.textContent = "Incorrect guess!";
      messageElement.style.color = "red";
    }

    letterInput.value = "";
    updateUI();
  } else {
    messageElement.textContent = "Invalid input or letter already guessed!";
    messageElement.style.color = "orange";
  }
}

function updateUI() {
  const wordArray = selectedWord.split("");
  let displayWord = "";

  wordArray.forEach((letter) => {
    if (guessedLetters.includes(letter)) {
      displayWord += letter;
    } else {
      displayWord += "_";
    }
  });

  wordDisplay.textContent = displayWord.split("").join(" ");

  attemptsElement.textContent = attemptsRemaining;
  incorrectGuessesElement.textContent = incorrectGuesses.join(", ");

  hangmanElement.innerHTML = `<img src="images/hangman-${
    6 - attemptsRemaining
  }.png" alt="Hangman Image">`;

  if (attemptsRemaining === 0) {
    messageElement.textContent = `Game Over! The word was ${selectedWord}.`;
    messageElement.style.color = "red";
  } else if (!displayWord.includes("_")) {
    messageElement.textContent = "You win!";
    messageElement.style.color = "green";
  }
}

startGame();
