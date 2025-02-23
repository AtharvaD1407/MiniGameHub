let userScore = 0;
let computerScore = 0;

function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let resultText = "";

  if (userChoice === computerChoice) {
    resultText = `It's a draw! You both chose ${userChoice}.`;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    resultText = `You win! ${userChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultText = `You lose! ${computerChoice} beats ${userChoice}.`;
  }

  document.getElementById("result-text").innerText = resultText;

  document.getElementById("user-score").innerText = userScore;
  document.getElementById("computer-score").innerText = computerScore;
}
