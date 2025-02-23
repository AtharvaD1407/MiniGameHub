function searchGame() {
  let query = document.getElementById("searchBar").value.trim().toLowerCase();
  let games = document.querySelectorAll(".game-card");

  let hasMatch = false;

  games.forEach((game) => {
    let title = game.querySelector("h3").innerText.toLowerCase();

    if (query === "" || title.startsWith(query)) {
      game.style.display = "block";
      hasMatch = true;
    } else {
      game.style.display = "none";
    }
  });

  if (!hasMatch) {
    games.forEach((game) => (game.style.display = "block"));
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
