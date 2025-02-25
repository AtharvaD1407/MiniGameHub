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
