document.addEventListener("DOMContentLoaded", function () {
  const cardsContainer = document.querySelector(".cards-container");
  const cards = document.querySelector(".cards");

  const clonedCards = cards.cloneNode(true);
  cardsContainer.appendChild(clonedCards);
});
