const quizData = [
  {
    question: "Which language is used for web pages?",
    options: ["HTML", "Python", "Java", "C++"],
    answer: "HTML"
  },

  {
    question: "Which language is used for styling?",
    options: ["Python", "CSS", "Java", "C++"],
    answer: "CSS"
  },

  {
    question: "Which language is used for interactivity?",
    options: ["HTML", "Java", "JavaScript", "CSS"],
    answer: "JavaScript"
  }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option-btn");
const scoreElement = document.getElementById("score");

loadQuestion();

function loadQuestion() {

  let currentQuiz = quizData[currentQuestion];

  questionElement.innerText = currentQuiz.question;

  optionButtons.forEach((button, index) => {
    button.innerText = currentQuiz.options[index];
  });
}

function checkAnswer(button) {

  let selectedAnswer = button.innerText;

  if (selectedAnswer === quizData[currentQuestion].answer) {
    score++;
  }

  optionButtons.forEach(btn => {
    btn.disabled = true;
  });
}

function nextQuestion() {

  currentQuestion++;

  optionButtons.forEach(btn => {
    btn.disabled = false;
  });

  if (currentQuestion < quizData.length) {
    loadQuestion();
  }

  else {
    questionElement.innerText = "Quiz Completed 🎉";

    document.querySelector(".options").style.display = "none";

    document.getElementById("next-btn").style.display = "none";

    scoreElement.innerText =
      "Your Score: " + score + "/" + quizData.length;
  }
}