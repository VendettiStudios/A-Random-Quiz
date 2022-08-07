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
    const currentQuestion = questions[currentQuestionIndex].title;
    const currentChoices = questions[currentQuestionIndex].choices;
    question.innerHTML = currentQuestion;
    choices.innerHTML = currentChoices;
//  append button to each choice
    
  }
};

// function startCountdown{

// }

// incrementer increment value by one
// this function will display the questions
// const currentQuestion = currentQuestionIndex[0];
//     let currentChoices = currentQuestionIndex[0];

// Need timer/score countdown to reveal when click start
// if statements
// function clockTick(){

// }
// Need answers to reveal with buttons

// function revealChoices(){
// let i = "choices"
// let currentChoices = questions[0];

//     console.log(currentChoices.title);
// }

// revealChoices();

// Need answers when clicked to display wrong or right
// then advance to next question, subtracting 15 seconds
// from the countdown if incorrect
// function choiceClick(){

// }
// need final screen that triggers when array is finished,
// with final score/time still displayed
// function quizEnd(){

// }

// need to store and parse score/time and alias to scores page upon click submit

// need Alias input box
// function checkForEnter(event){

// }
// need submit button
// submitButton.onclick = function saveScore(){

// }
