const questions = {
  general: [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Shakespeare", "Dickens", "Austen", "Hemingway"],
      answer: "Shakespeare",
    },
  ],
  movies: [
    {
      question: "Which movie won Best Picture at the 2020 Oscars?",
      options: ["Joker", "1917", "Parasite", "Ford v Ferrari"],
      answer: "Parasite",
    },
  ],
};

let currentCategory = "";
let currentQuestionIndex = 0;
let score = 0;
let timeLeft;
let timer;
let lifelinesUsed = { fiftyFifty: false, extraTime: false, skip: false };
let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

function startQuiz(category) {
  currentCategory = category;
  currentQuestionIndex = 0;
  score = 0;
  lifelinesUsed = { fiftyFifty: false, extraTime: false, skip: false };

  document.getElementById("category-selection").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("score-display").innerText = "";

  loadQuestion();
}

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 10;
  document.getElementById("time").innerText = timeLeft;
  timer = setInterval(updateTimer, 1000);

  const questionData = questions[currentCategory][currentQuestionIndex];
  document.getElementById("question").innerText = questionData.question;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  questionData.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.onclick = () => checkAnswer(option, button);
    optionsContainer.appendChild(button);
  });

  document.getElementById("next-btn").classList.add("hidden");
}

function checkAnswer(selected, button) {
  clearInterval(timer);
  const correctAnswer = questions[currentCategory][currentQuestionIndex].answer;

  if (selected === correctAnswer) {
    button.classList.add("correct");
    score++;
    document.getElementById("correct-sound").play();
  } else {
    button.classList.add("wrong");
    document.getElementById("wrong-sound").play();
  }

  document
    .querySelectorAll("#options button")
    .forEach((btn) => (btn.disabled = true));
  document.getElementById("next-btn").classList.remove("hidden");
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions[currentCategory].length) {
    loadQuestion();
  } else {
    showLeaderboard();
  }
}

function showLeaderboard() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("leaderboard").classList.remove("hidden");
}
