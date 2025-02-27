const dino = document.getElementById("dino");
const gameContainer = document.querySelector(".game-container");
const scoreDisplay = document.getElementById("score");
const gameOverText = document.getElementById("game-over");

let isJumping = false;
let gravity = 0.9;
let velocity = 0;
let obstacles = [];
let score = 0;
let gameRunning = true;

// Dino Jump Function
document.addEventListener("keydown", function (event) {
  if (event.code === "Space" && !isJumping && gameRunning) {
    isJumping = true;
    velocity = -12; // Jump strength
  }
  if (!gameRunning && event.code === "Space") {
    restartGame();
  }
});

// Game Loop (Gravity & Dino Jump)
function update() {
  if (isJumping) {
    velocity += gravity;
    dino.style.bottom = `${parseInt(dino.style.bottom || "50px") - velocity}px`;

    if (parseInt(dino.style.bottom) <= 50) {
      dino.style.bottom = "50px";
      isJumping = false;
    }
  }

  // Move obstacles
  obstacles.forEach((obstacle, index) => {
    let obstacleLeft = parseInt(obstacle.style.left);
    if (obstacleLeft <= -30) {
      obstacle.remove();
      obstacles.splice(index, 1);
      score++; // Increase score
      scoreDisplay.innerText = `Score: ${score}`;
    } else {
      obstacle.style.left = `${obstacleLeft - 5}px`;
    }

    // Collision Detection
    if (
      obstacleLeft < 75 &&
      obstacleLeft > 25 &&
      parseInt(dino.style.bottom) <= 85
    ) {
      endGame();
    }
  });

  if (gameRunning) {
    requestAnimationFrame(update);
  }
}

// Spawn Obstacles
function spawnObstacle() {
  if (!gameRunning) return;

  let obstacle = document.createElement("div");
  obstacle.classList.add("obstacle");
  obstacle.style.left = "800px";
  gameContainer.appendChild(obstacle);
  obstacles.push(obstacle);

  let randomTime = Math.random() * 2000 + 1000; // 1-3 sec delay
  setTimeout(spawnObstacle, randomTime);
}

// End Game Function
function endGame() {
  gameRunning = false;
  gameOverText.style.display = "block";
}

// Restart Game
function restartGame() {
  score = 0;
  scoreDisplay.innerText = "Score: 0";
  gameRunning = true;
  gameOverText.style.display = "none";
  dino.style.bottom = "50px";
  obstacles.forEach((obstacle) => obstacle.remove());
  obstacles = [];
  spawnObstacle();
  update();
}

// Start the Game
dino.style.bottom = "50px"; // Set default position
spawnObstacle();
update();
