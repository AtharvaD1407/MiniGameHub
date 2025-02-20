function searchGame() {
  let query = document.getElementById("searchBar").value.trim().toLowerCase();
  let games = document.querySelectorAll(".game-card");
  let noResultMessage = document.getElementById("no-result");

  let found = false;

  games.forEach((game) => {
    let title = game.querySelector("h2").innerText.toLowerCase();
    if (title.includes(query)) {
      game.style.display = "flex"; 
      found = true;
    } else {
      game.style.display = "none";
    }
  });

  if (noResultMessage) {
    noResultMessage.style.display = found ? "none" : "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const cardsContainer = document.querySelector(".cards-container");
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");

  let scrollAmount = 300;

  rightArrow.addEventListener("click", function () {
    cardsContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  leftArrow.addEventListener("click", function () {
    cardsContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
});
