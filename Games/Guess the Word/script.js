const words = [
  "apple",
  "banana",
  "orange",
  "guitar",
  "pencil",
  "notebook",
  "developer",
  "keyboard",
  "monitor",
  "laptop",
];

let chosenWord = "";
let revealedIndices = [];

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function revealLetters(word) {
  let revealCount = word.length <= 4 ? 1 : word.length <= 7 ? 2 : 3;
  let indices = new Set();

  while (indices.size < revealCount) {
    let randomIndex = Math.floor(Math.random() * word.length);
    indices.add(randomIndex);
  }

  return [...indices];
}

function startGame() {
  document.getElementById("result-message").textContent = "";
  document.querySelector(".play-again").style.display = "none";

  chosenWord = getRandomWord();
  revealedIndices = revealLetters(chosenWord);

  let wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

  for (let i = 0; i < chosenWord.length; i++) {
    let input = document.createElement("input");
    input.type = "text";
    input.maxLength = 1;
    input.dataset.index = i;

    if (revealedIndices.includes(i)) {
      input.value = chosenWord[i];
      input.readOnly = true;
      input.classList.add("filled");
    } else {
      input.addEventListener("input", checkLetter);
    }

    wordContainer.appendChild(input);
  }
}

function checkLetter(event) {
  let input = event.target;
  let index = input.dataset.index;
  let letter = input.value.toLowerCase();

  if (!/^[a-zA-Z]$/.test(letter)) {
    input.value = "";
    return;
  }

  if (letter === chosenWord[index]) {
    input.classList.add("correct");
    input.classList.remove("wrong");
  } else {
    input.classList.add("wrong");
    input.classList.remove("correct");
  }

  checkWin();
}

function checkWin() {
  let inputs = document.querySelectorAll("#word-container input:not(.filled)");
  let allCorrect = [...inputs].every(
    (input, i) => input.value.toLowerCase() === chosenWord[input.dataset.index]
  );

  if (allCorrect) {
    document.getElementById("result-message").textContent =
      "🎉 You guessed it!";
    document.getElementById("result-message").style.color = "green";
    document.querySelector(".play-again").style.display = "block";

    inputs.forEach((input) => (input.readOnly = true));
  }
}

// Start game when page loads
window.onload = startGame;
