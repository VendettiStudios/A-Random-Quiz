const startScreen = document.getElementById("startScreen");
const startQuiz = document.getElementById("startButton");
const choices = document.getElementById("choices");
const question = document.getElementById("question");
const timer = document.getElementById("seconds");
// const lastQuestion = questions.length - 1
let showTimer;
let seconds = 75;
let currentQuestionIndex = 0;

// Hides Start Screen, Starts Quiz, shows and starts timer
startQuiz.onclick = function () {
  if (startScreen.style.display !== "none") {
    startScreen.style.display = "none";
  } else {
    startScreen.style.display = "block";
  }
//  reveal timer - start countdown
  showTimer = setInterval(startCountdown, 1000);
  timer.textContent = seconds;
  revealQuestion();
//   start countdown function
  function startCountdown() {
    seconds--;
    timer.textContent = seconds;

    if (seconds <= 0) {
      endQuiz();
    }
  }
  // renders first question and choices in array
  function revealQuestion() {
    // renders current question
    const currentQuestion = questions[currentQuestionIndex].title;
    const currentChoices = questions[currentQuestionIndex].choices;
    question.innerHTML = currentQuestion;
    // renders current choices
    choices.innerHTML = "";
    currentChoices.forEach(function(choice, i){
        let choiceList = document.createElement("button");
        choiceList.setAttribute("type", "choice");
        choiceList.textContent = i + 1 + ". " + choice;
        choices.appendChild(choiceList);
    })
  }
};
