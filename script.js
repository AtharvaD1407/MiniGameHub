document.addEventListener("DOMContentLoaded", function () {
  const cardsContainer = document.querySelector(".cards-container");
  const cards = document.querySelector(".cards");

  const games = {
    Hangman: {
      img: "Images/hangman.png",
      description: "Test your word-guessing skills with this classic game.",
      url: "Games/Hangman/index.html",
    },
    "Guess the Number": {
      img: "Images/guessTheNumber.jpg",
      description: "Can you guess the number? Test your luck!",
      url: "Games/Guess the Number/index.html",
    },
    "Guess the Word": {
      img: "Images/guessTheWord.png",
      description: "Guess the hidden word and challenge yourself.",
      url: "Games/Guess the Word/index.html",
    },
    "Rock Paper Scissor": {
      img: "Images/rockPaperScissor.jpg",
      description:
        "Play the classic Rock, Paper, Scissors game against the computer and test your luck!",
      url: "Games/Rock Paper Scissor/index.html",
    },
    "Background Color Changer": {
      img: "Images/backgroundColorChanger.jpg",
      description: "Click to cycle through three different background colors!",
      url: "Games/Background Color Changer/index.html",
    },
    "Trivia Quiz": {
      img: "Images/triviaQuiz.gif",
      description:
        "Test your knowledge with fun and challenging trivia questions!",
      url: "Games/Trivia Quiz/index.html",
    },
    "Memory Match": {
      img: "Images/memoryGame.jpg",
      description:
        "Sharpen your memory by matching identical cards in this fun game!",
      url: "Games/Memory Match/index.html",
    },
    "Block Jump": {
      img: "Images/blockJump.png",
      description:
        "Jump over obstacles and test your reflexes in this fast-paced block jump game!",
      url: "Games/Block Jump Game/index.html",
    },
  };

  Object.entries(games).forEach(([title, data]) => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <img src="${data.img}" alt="${title}" />
      <h3>${title}</h3>
      <p>${data.description}</p>
      <a href="${data.url}" target="_blank"><button>Play Now</button></a>
    `;
    cards.appendChild(card);
  });

  const clonedCards = cards.cloneNode(true);
  cardsContainer.appendChild(clonedCards);
});
